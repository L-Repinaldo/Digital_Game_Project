
from flask import Flask
from flask_cors import CORS

from app.routes import game_router, main_router


def create_app():
    app = Flask(__name__)

    app.config["SECRET_KEY"] = "dev-secret-key"

    CORS(
        app,
        resources={
            r"/api/*": {
                "origins": [
                    "http://localhost:5173",
                    "http://127.0.0.1:5173",
                ],
                "supports_credentials": True,
            }
        },
    )

    app.register_blueprint(main_router)
    app.register_blueprint(game_router, url_prefix="/api")

    return app
