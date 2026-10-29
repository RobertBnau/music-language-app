"""Focused tests for the Task 001 backend endpoints."""

from fastapi.testclient import TestClient

from backend.app.main import app


client = TestClient(app)


def test_health_returns_ok() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_songs_returns_safe_demo_metadata() -> None:
    response = client.get("/api/songs")

    assert response.status_code == 200
    songs = response.json()

    assert len(songs) == 2
    assert all(set(song) == {"id", "title", "artist", "language"} for song in songs)
    assert all(song["language"] == "it" for song in songs)
    assert all(song["id"].startswith("demo-") for song in songs)
    assert all("lyrics" not in song and "audio" not in song for song in songs)


def test_songs_allows_the_local_frontend_origin() -> None:
    response = client.get(
        "/api/songs",
        headers={"Origin": "http://localhost:3000"},
    )

    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "http://localhost:3000"
