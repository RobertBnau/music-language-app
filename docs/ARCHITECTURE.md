# Architecture — Initial Direction

- `frontend/`: Next.js + React + TypeScript, renders song list and later game.
- `backend/`: FastAPI app, Python 3.10+, serves API and checks answers. Use pytest.
- Database in later sprint: SQLAlchemy and Alembic, modeled for PostgreSQL. Local SQLite acceptable early.

## Request flow
`Browser (Next.js) -> HTTP GET /api/songs -> FastAPI -> JSON list -> browser`.

Later gameplay:
`Browser -> GET /api/songs/{id}/challenge -> FastAPI returns options without correct answer`.
`Browser -> POST /api/challenges/{id}/attempt -> backend validates and returns result`.
`Backend -> SQL tables for attempts/sessions` (later sprint).

## API principles
- Versionable routes may use `/api/v1/` if consistent across frontend/backend.
- Prefer typed Pydantic models and explicit HTTP statuses.
- Configure local CORS narrowly, for expected dev origin only.
- Do not expose answer keys to clients before submission.
