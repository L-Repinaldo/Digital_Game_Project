from flask import Blueprint, jsonify, session, request

from ..content import load_words, get_word
from ..core import GameEngine


game_router = Blueprint("game", __name__)


@game_router.get("/game/")
def start_game():
    word_bank = load_words()

    if not word_bank.words:
        return jsonify({
            "error": "Nenhuma palavra disponível."
        }), 404

    completed_word_ids = session.get("completed_word_ids", [])

    available_words = [
        word
        for word in word_bank.words
        if word.id not in completed_word_ids
    ]

    if not available_words:
        completed_word_ids = []
        session["completed_word_ids"] = []
        available_words = word_bank.words

    word = available_words[0]
    engine = GameEngine(word)

    session["game"] = {
        "word_id": word.id,
        "guessed_letters": [],
        "wrong_letters": [],
        "attempts": engine.max_attempts,
        "hints_used": 0,
    }

    session.modified = True

    return jsonify({
        "context": word.context,
        "category": word.category,
        "masked_word": engine.masked_word(),
        "attempts": engine.attempts,
        "max_attempts": engine.max_attempts,
        "guessed_letters": [],
        "wrong_letters": [],
        "hints_used": 0,
        "hints": word.hints,
        "explanation": word.explanation,
    })


@game_router.post("/game/guess")
def guess():
    word_bank = load_words()

    data = request.get_json(silent=True) or {}
    letter = data.get("letter", "")

    if not isinstance(letter, str):
        return jsonify({
            "error": "A letra deve ser uma string."
        }), 400

    letter = letter.strip().upper()

    if len(letter) != 1 or not letter.isalpha():
        return jsonify({
            "error": "Informe apenas uma letra válida."
        }), 400

    state = session.get("game")

    if state is None:
        return jsonify({
            "error": "Nenhuma partida ativa. Inicie uma nova partida."
        }), 400

    word = get_word(state["word_id"], word_bank)

    engine = GameEngine(word)
    engine.guessed_letters = set(state["guessed_letters"])
    engine.wrong_letters = set(state["wrong_letters"])
    engine.attempts = state["attempts"]

    if engine.is_finished():
        return jsonify({
            "error": "Esta partida já terminou."
        }), 400

    correct = engine.guess(letter)

    state["guessed_letters"] = list(engine.guessed_letters)
    state["wrong_letters"] = list(engine.wrong_letters)
    state["attempts"] = engine.attempts

    won = engine.is_won()
    lost = engine.is_lost()

    if won:
        completed_word_ids = session.get("completed_word_ids", [])

        if word.id not in completed_word_ids:
            completed_word_ids.append(word.id)
            session["completed_word_ids"] = completed_word_ids

    session.modified = True

    response = {
        "correct": correct,
        "word": engine.masked_word(),
        "attempts": engine.attempts,
        "won": won,
        "lost": lost,
        "hints": word.hints,
        "explanation": word.explanation,
    }

    if engine.is_finished():
        response["answer"] = word.word

    return jsonify(response)

@game_router.post("/game/hint")
def use_hint():
    game_state = session.get("game")

    if not game_state:
        return jsonify({"error": "Nenhuma partida ativa."}), 400

    word_bank = load_words()
    word = next(
        (item for item in word_bank.words if item.id == game_state["word_id"]),
        None,
    )

    if word is None:
        return jsonify({"error": "Palavra da partida não encontrada."}), 404

    attempts = game_state["attempts"]
    hints_used = game_state.get("hints_used", 0)
    guessed_letters = {
        str(letter).upper()
        for letter in game_state.get("guessed_letters", [])
    }

    word_letters = {
        char.upper()
        for char in word.word
        if char.isalpha()
    }

    won = word_letters.issubset(guessed_letters)
    lost = attempts <= 0

    if won or lost:
        return jsonify({"error": "A partida já terminou."}), 400

    if attempts <= 1:
        return jsonify({
            "error": "Você precisa ter pelo menos duas vidas para usar uma dica."
        }), 400

    if hints_used >= len(word.hints):
        return jsonify({"error": "Não há mais dicas disponíveis."}), 400

    hint = word.hints[hints_used]
    attempts -= 1
    hints_used += 1

    game_state["attempts"] = attempts
    game_state["hints_used"] = hints_used

    session["game"] = game_state
    session.modified = True

    return jsonify({
        "hint": hint,
        "attempts": attempts,
        "hints_used": hints_used,
    }), 200