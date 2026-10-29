# Music Language App — Agent Starter Kit

This is a product specification and agent-guidance starter, **not yet a running application**. Give the coding agent `tasks/001-foundation.md` and let it implement the first slice.

## Open in VS Code on Windows
1. Unzip this folder into a clean local project folder such as `Documents\music-language-app`.
2. Open the extracted folder in VS Code: **File > Open Folder**.
3. Initialize Git in the VS Code terminal (PowerShell): `git init` (if not already a repository).
4. Install the official **Codex — OpenAI** VS Code extension if needed and sign in with ChatGPT.
5. Open the Codex sidebar and paste the kickoff prompt below.

## Initial Codex prompt

Read `AGENTS.md`, `docs/MVP.md`, `docs/ARCHITECTURE.md`, `docs/DATA_PLAN.md`, and `tasks/001-foundation.md`. Act as the engineering coordinator. Implement Task 001 only. Delegate independent frontend and backend subtasks to agents if supported, otherwise work sequentially and tell me. Do not add accounts, external song APIs, commercial lyrics, payment services, or AI inference. Before editing, briefly outline your plan. After implementing, run available tests, summarize file changes, give exact commands to launch frontend/backend, and teach me the Python request handler and the data flow in simple terms. Stop after Task 001 and ask for approval before Task 002.

## Next
After Task 001 is verified locally, complete `tasks/002-gameplay.md` with an original or properly licensed demo song.
