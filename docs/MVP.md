# MVP Definition

## Target learner
A beginner learning Italian, practicing vocabulary and listening with an appealing music-based game.

## First playable experience (north star)
1. Browse one or more authorized demo songs.
2. Select a demo song.
3. Play authorized audio (to be added only when rights-clear material is available) and complete a multiple-choice missing-lyrics exercise.
4. Submit an answer; the backend validates it and returns feedback.
5. Complete a short round, see score and review mistakes.
6. In a subsequent sprint, store results and analyze progress.

## Task 001 scope
Build the minimal frontend/backend communication, song library with placeholder original metadata, a working `/health` endpoint, a documented API contract, and basic tests. No audio player is required in Task 001.

## Explicitly out of scope initially
Production licensing, AI-generated content, subscriptions, leaderboards, streaks, user accounts, OAuth, advanced translations, mobile native applications, analytics dashboards, large catalogs.

## Non-functional priorities
Simple to run on a Windows development machine. Clear tests. Safe handling of user input. No API keys needed. Accessible responsive design.
