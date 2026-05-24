"""Basic test to verify backend modules can be imported."""
import pytest


def test_imports():
    """Test that all backend modules can be imported successfully."""
    try:
        import main
        from database import db_connection
        from middleware import auth_verify_token
        from models import users_model
        from routers import users_router
        from services import users_service
    except ImportError as e:
        pytest.fail(f"Failed to import backend module: {e}")


def test_fastapi_import():
    """Test that FastAPI is available."""
    try:
        from fastapi import FastAPI
    except ImportError:
        pytest.fail("FastAPI not installed")
