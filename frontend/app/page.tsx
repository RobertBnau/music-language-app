"use client";

import { useCallback, useEffect, useState } from "react";

type Song = {
  id: string;
  title: string;
  artist_name?: string;
  artist?: string;
  language: string;
};

type FetchState = "loading" | "ready" | "error";

const apiBaseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000").replace(
  /\/$/,
  "",
);

function getArtistName(song: Song) {
  return song.artist_name ?? song.artist ?? "Demo artist";
}

export default function HomePage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [state, setState] = useState<FetchState>("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const loadSongs = useCallback(async () => {
    setState("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${apiBaseUrl}/api/songs`, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`The song library returned status ${response.status}.`);
      }

      const payload: unknown = await response.json();
      if (!Array.isArray(payload)) {
        throw new Error("The song library response was not a list.");
      }

      setSongs(payload as Song[]);
      setState("ready");
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not connect to the song library.",
      );
    }
  }, []);

  useEffect(() => {
    void loadSongs();
  }, [loadSongs]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Canta home">
            <span className="brand-mark" aria-hidden="true">
              ♪
            </span>
            <span>Canta</span>
          </a>

          <nav aria-label="Primary navigation">
            <a className="nav-link active" href="#library" aria-current="page">
              Library
            </a>
            <span className="language-pill" lang="it">
              Italiano
            </span>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">Listen. Notice. Remember.</p>
            <h1 id="page-title">Learn Italian, one chorus at a time.</h1>
            <p className="hero-intro">
              Explore a tiny library of original demo songs made for gentle,
              beginner-friendly listening practice.
            </p>
          </div>
          <div className="hero-note" aria-label="Demo library note">
            <span className="note-icon" aria-hidden="true">
              ✦
            </span>
            <span>Original demo content</span>
          </div>
        </section>

        <section className="library-section" id="library" aria-labelledby="library-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Your next listening session</p>
              <h2 id="library-title">Choose a song</h2>
            </div>
            {state === "ready" && songs.length > 0 ? (
              <p className="result-count" aria-live="polite">
                {songs.length} {songs.length === 1 ? "song" : "songs"}
              </p>
            ) : null}
          </div>

          {state === "loading" ? (
            <div className="status-panel" role="status" aria-live="polite">
              <span className="spinner" aria-hidden="true" />
              <span>Loading the demo library…</span>
            </div>
          ) : null}

          {state === "error" ? (
            <div className="status-panel error-panel" role="alert">
              <div>
                <strong>We couldn’t load the library.</strong>
                <p>{errorMessage}</p>
                <p className="help-text">
                  Check that the FastAPI service is running and that
                  <code> NEXT_PUBLIC_API_BASE_URL </code>
                  points to it.
                </p>
              </div>
              <button className="button secondary-button" type="button" onClick={() => void loadSongs()}>
                Try again
              </button>
            </div>
          ) : null}

          {state === "ready" && songs.length === 0 ? (
            <div className="status-panel" role="status">
              <strong>No demo songs yet.</strong>
              <p>The library is connected, but it has no songs to show.</p>
            </div>
          ) : null}

          {state === "ready" && songs.length > 0 ? (
            <div className="song-grid">
              {songs.map((song) => (
                <article className="song-card" key={song.id}>
                  <div className="card-art" aria-hidden="true">
                    <span>♫</span>
                  </div>
                  <div className="card-content">
                    <div className="card-topline">
                      <span className="language-tag" lang={song.language}>
                        {song.language}
                      </span>
                      <span className="song-id">Demo {song.id}</span>
                    </div>
                    <h3>{song.title}</h3>
                    <p className="artist-name">{getArtistName(song)}</p>
                    <button className="button card-button" type="button" disabled>
                      Coming soon
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </section>
      </main>

      <footer className="site-footer">
        <p>Practice with original, rights-clear demo content.</p>
      </footer>
    </div>
  );
}
