from pathlib import Path

from flask import (
    Blueprint,
    jsonify,
    send_from_directory,
    abort,
    current_app,
)

main_router = Blueprint("main", __name__)

STATIC_DIR = Path(__file__).resolve().parents[1] / "static"


@main_router.get("/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Digital Game API is running."
    })


@main_router.get("/")
def index():
    return send_from_directory(STATIC_DIR, "index.html")


@main_router.get("/<path:path>")
def frontend(path):
    if path.startswith("api/"):
        abort(404)

    file_path = STATIC_DIR / path

    if file_path.is_file():
        return send_from_directory(STATIC_DIR, path)

    return send_from_directory(STATIC_DIR, "index.html")