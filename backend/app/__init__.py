import os
from flask import Flask

from app.routes import game_router, main_router


def create_app():
    app = Flask(__name__, static_folder=None)

    app.config.update(
        SECRET_KEY=os.environ.get("SECRET_KEY", "dev-secret-key"),
        SESSION_COOKIE_HTTPONLY=True,
        SESSION_COOKIE_SAMESITE="Lax",
        SESSION_COOKIE_SECURE=os.environ.get(
            "COOKIE_SECURE", "true"
        ).lower() == "true",
    )

    app.register_blueprint(main_router)
    app.register_blueprint(game_router, url_prefix="/api")

    return app