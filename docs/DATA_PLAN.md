# Data Plan — Future Database and Learning Analytics

## Proposed relational entities (not all needed in Task 001)
- `songs`: `id`, `title`, `artist_name`, `language_code`, `audio_license_status`.
- `lyric_lines`: `id`, `song_id`, `line_order`, `text`, optional `start_ms` / `end_ms`.
- `challenges`: `id`, `song_id`, `lyric_line_id`, `question_type`, `prompt`, `answer_key` (server only), `difficulty`.
- `play_sessions`: `id`, `learner_id` nullable in prototype, `song_id`, `started_at`, `completed_at`.
- `attempts`: `id`, `session_id`, `challenge_id`, `submitted_answer`, `is_correct`, `response_ms`, `created_at`.

## Data science opportunities (later)
- Accuracy by language skill and question type.
- Retry patterns and long-term retention, not just repeated memorization.
- Item difficulty using smoothed empirical error rate and response time.
- Adaptive recommendations after sufficient real data is available.

## Responsible measurement
Avoid collecting unnecessary personally identifying data. Separate game XP from validated language ability. Document any scoring metrics and potential biases. No invented proficiency claims.
