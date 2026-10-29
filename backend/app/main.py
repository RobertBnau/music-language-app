"""FastAPI application for the Task 001 backend foundation."""

from typing import Literal

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    """Status returned by the health check endpoint."""

    status: Literal["ok"]


class SongMetadata(BaseModel):
    """Safe, original demo metadata shown in the song library."""

    id: str = Field(min_length=1)
    title: str = Field(min_length=1)
    artist: str = Field(min_length=1, description="An invented artist alias")
    language: Literal["it"]


DEMO_SONGS: tuple[SongMetadata, ...] = (
    SongMetadata(
        id="demo-luce-di-carta",
        title="Luce di Carta",
        artist="Nina Vela",
        language="it",
    ),
    SongMetadata(
        id="demo-passi-di-vento",
        title="Passi di Vento",
        artist="Marco Soli",
        language="it",
    ),
)

ALLOWED_ORIGINS = (
    "http://localhost:3000",
    "http://127.0.0.1:3000",
)

app = FastAPI(
    title="Music Language App API",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(ALLOWED_ORIGINS),
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=[],
)


@app.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    """Return a simple liveness response for local development."""

    return HealthResponse(status="ok")


@app.get("/api/songs", response_model=list[SongMetadata])
def list_songs() -> list[SongMetadata]:
    """Return original Italian demo song metadata without lyrics or audio."""

    return list(DEMO_SONGS)
