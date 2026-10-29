# Agent Instructions — Music-Based Language Learning App

## Product goal
Build a web-first language-learning game where learners choose a song and practice listening, vocabulary, and comprehension through lyric challenges. The initial prototype is an Italian fill-in-the-blank game using original, authorized sample content only.

## Tech and boundaries
- Frontend: Next.js with React + TypeScript. Keep it visually accessible, responsive, and simple.
- Backend: Python 3.10+ with FastAPI, Pydantic, and pytest.
- Database: design for PostgreSQL with SQLAlchemy/Alembic; local SQLite is acceptable in early development to avoid Docker prerequisites. No accounts are required in the first sprint.
- Do not use copyrighted lyrics, commercial recordings, scraped lyric data, or third-party song APIs without explicit authorization.
- Do not require OpenAI API credentials or paid services for the prototype.
- Do not install global dependencies, publish/deploy, push Git commits, delete existing files, or spend money without founder approval.
- Work in small reviewable increments. Before editing, inspect existing files and give a brief plan.
- Keep secrets out of the repository; use .env.example and gitignore .env files.

## Team responsibilities (logical roles; these files do not themselves launch agents)
- **Coordinator**: read docs/MVP.md and tasks/001-foundation.md; break down work, keep backend and frontend contracts aligned, integrate and summarize.
- **Frontend developer**: implement the Next.js screens with simple UX. Do not alter backend files unless coordinating with the owner.
- **Backend developer**: implement FastAPI endpoints, input validation, correctness logic, persistence when assigned, and pytest tests.
- **QA reviewer**: inspect acceptance criteria, run tests when available, flag bugs and security issues. Avoid simultaneous edits to files owned by another agent.
Delegate independent work to subagents only if the current coding environment supports delegation. Otherwise execute the roles sequentially and say so.

## Learning contract for the founder
After every backend or database change, explain in 4–8 sentences:
1. What changed and why.
2. What Python function/route handles the request.
3. What is stored or retrieved in SQL (or not yet stored).
4. How the change was tested and what to look at in VS Code.
Favor clarity over abstraction. Use type hints and plain names.

## Quality and safety
- Prefer focused tests over large unverified changes.
- Verify with documented commands. Never claim a test passed unless run.
- Keep answer keys on the backend; avoid exposing correct answers in initial question payloads.
- Store one attempt per interaction with IDs in later sprint; avoid duplicate submissions for scores.
- Avoid unapproved telemetry and collection of personal data.
- Stop after the current task's acceptance criteria and report next steps; do not expand scope without approval.

## Starting point
Begin with `tasks/001-foundation.md`. Read `docs/MVP.md`, `docs/ARCHITECTURE.md`, and `docs/DATA_PLAN.md` for requirements.
