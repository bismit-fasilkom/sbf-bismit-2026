'use client';

import React, { useState } from 'react';
import type { JokeResponse } from '@/types/joke';

/**
 * Komponen Demo Interaktif Bagian B: DOM & Events
 * Menyatu dengan design system Fumadocs (menggunakan token css fd-* dan border standar)
 */
export function JsDomDemo() {
  const [count, setCount] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const getStatus = () => {
    if (count === 0) return 'Netral (Nol)';
    if (count > 0) return count % 2 === 0 ? 'Positif (Genap)' : 'Positif (Ganjil)';
    return 'Negatif';
  };

  return (
    <div
      id="dom-card"
      className={`my-6 rounded-lg border p-5 transition-colors ${
        isHighlighted
          ? 'border-fd-primary bg-fd-primary/5'
          : 'border-fd-border bg-fd-card text-fd-card-foreground'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-fd-border pb-4">
        <div>
          <span className="text-xs font-mono text-fd-muted-foreground">
            Target: id=&quot;counter-value&quot;
          </span>
          <div className="text-3xl font-mono font-bold text-fd-foreground mt-1" id="counter-value">
            {count}
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-fd-muted-foreground">
            Target: id=&quot;status-badge&quot;
          </span>
          <div
            id="status-badge"
            className="mt-1 inline-block rounded-md border border-fd-border bg-fd-muted px-2.5 py-1 text-xs font-medium text-fd-foreground"
          >
            {getStatus()}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-4">
        <button
          id="increment-btn"
          type="button"
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-md bg-fd-primary px-3 py-1.5 text-xs font-medium text-fd-primary-foreground hover:opacity-90 transition-opacity"
        >
          +1 Tambah (Click)
        </button>

        <button
          id="decrement-btn"
          type="button"
          onClick={() => setCount((prev) => prev - 1)}
          className="rounded-md bg-fd-secondary px-3 py-1.5 text-xs font-medium text-fd-secondary-foreground hover:bg-fd-accent transition-colors"
        >
          -1 Kurang
        </button>

        <button
          id="reset-btn"
          type="button"
          onClick={() => setCount(0)}
          className="rounded-md border border-fd-border bg-fd-background px-3 py-1.5 text-xs font-medium text-fd-foreground hover:bg-fd-muted transition-colors"
        >
          Reset (0)
        </button>

        <button
          id="theme-toggle-btn"
          type="button"
          onClick={() => setIsHighlighted((prev) => !prev)}
          className="ml-auto rounded-md border border-fd-border bg-fd-background px-3 py-1.5 text-xs font-medium text-fd-foreground hover:bg-fd-muted transition-colors"
        >
          {isHighlighted ? 'Hapus Highlight Class' : 'classList.toggle("highlight")'}
        </button>
      </div>
    </div>
  );
}

/**
 * Komponen Demo Interaktif Bagian C: Async & Fetch API
 * Mengambil data dari https://jokes-bapack2-api.yuana.id/v1/text/random
 */
export function JsFetchDemo() {
  const [jokeText, setJokeText] = useState<string>(
    'Klik tombol di bawah untuk mengambil jokes bapak-bapak dari server.'
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFetchJoke = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('https://jokes-bapack2-api.yuana.id/v1/text/random');

      if (!response.ok) {
        throw new Error(`Permintaan gagal dengan status ${response.status}`);
      }

      const result: JokeResponse = await response.json();
      setJokeText(result.data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Gagal menghubungi server.';
      setErrorMsg(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-6 rounded-lg border border-fd-border bg-fd-card text-fd-card-foreground p-5 space-y-4">
      {/* Wadah Teks Lelucon (id="joke-display") */}
      <div
        id="joke-display"
        aria-live="polite"
        className="min-h-[90px] rounded-md border border-fd-border bg-fd-muted/50 p-4 text-center flex items-center justify-center"
      >
        {isLoading ? (
          <span className="text-sm font-medium text-fd-muted-foreground animate-pulse">
            Mengambil data dari server...
          </span>
        ) : errorMsg ? (
          <span className="text-sm text-red-500 font-medium">{errorMsg}</span>
        ) : (
          <p className="text-sm md:text-base font-serif italic whitespace-pre-line text-fd-foreground">
            &ldquo;{jokeText}&rdquo;
          </p>
        )}
      </div>

      {/* Tombol Pemicu Fetch (id="fetch-btn") */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          id="fetch-btn"
          type="button"
          onClick={handleFetchJoke}
          disabled={isLoading}
          className="rounded-md bg-fd-primary px-4 py-2 text-xs font-semibold text-fd-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {isLoading ? 'Mengambil data...' : 'Ambil Jokes Baru (fetch)'}
        </button>

        <span className="text-xs font-mono text-fd-muted-foreground">
          Tombol: {isLoading ? 'disabled = true' : 'disabled = false'}
        </span>
      </div>
    </div>
  );
}
