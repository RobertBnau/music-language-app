# Task 001 — Build a Working Frontend–Backend Foundation

## Objective
From this specification-only starter repository, produce a locally running, testable Next.js frontend and FastAPI backend that communicate successfully.

## Required implementation
1. Create `backend/` containing FastAPI application with `GET /health` -> JSON with `status: ok` and a `GET /api/songs` endpoint returning a small list of clearly invented, original demo song metadata only (title, artist alias, language, ID). Do not use real song lyrics or audio.
2. Create `frontend/` containing a Next.js TypeScript homepage with a clean, mobile-responsive header, Italian language label, a song card showing original/demo metadata, and a real API request to display songs. Include loading and helpful error states.
3. Add simple automated pytest tests for the backend endpoints; optionally add frontend tests if practical. Ensure frontend API base URL configurable via `.env.local.example`.
4. Provide run instructions in README for Windows PowerShell, including `py -3.10 -m venv .venv` where supported, backend dependency installation, and Next.js setup. Do not assume Docker is installed.
5. Include `.gitignore` for Python venvs, Node dependencies, build outputs, environment secrets.

## Success criteria
- Backend `/health` returns a valid success JSON response.
- Backend `/api/songs` returns only safe original/demo metadata.
- Frontend fetches and renders songs from the backend, rather than a hardcoded frontend-only list.
- Backend tests pass when run.
- The final response lists actual commands to run both services and tests, and explains the Python endpoints and request flow.

## Boundaries
Do not add a database or accounts yet, do not create or use commercial audio/lyrics, do not connect external services, do not deploy, and do not start Task 002 without explicit approval.
