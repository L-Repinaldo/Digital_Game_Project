
from flask import Blueprint, jsonify

main_router = Blueprint("main", __name__)


@main_router.get("/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Digital Game API is running."
    })