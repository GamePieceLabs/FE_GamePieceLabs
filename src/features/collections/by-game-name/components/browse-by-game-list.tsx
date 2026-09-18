"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import type { BrowseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";

type BrowseByGameListProps = {
  title: BrowseByGameContent["browseTitle"];
  searchPlaceholder: BrowseByGameContent["searchPlaceholder"];
  games: BrowseByGameContent["games"];
};

function toGameHref(game: string) {
  return `/collections/${game
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export function BrowseByGameList({
  title,
  searchPlaceholder,
  games,
}: BrowseByGameListProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGames = useMemo(() => {
    if (!normalizedQuery) {
      return games;
    }

    return games.filter((game) => game.toLowerCase().includes(normalizedQuery));
  }, [games, normalizedQuery]);

  return (
    <section className="px-5 py-10 sm:px-[var(--section-padding-x)] sm:py-[80px]">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-center justify-between gap-8 max-mobile:flex-col max-mobile:items-stretch">
          <h2 className="text-[48px] font-bold leading-[1.1] text-neutral-950 max-mobile:text-center max-mobile:text-[32px]">
            {title}
          </h2>

          <div className="flex items-center gap-5 max-mobile:w-full">
            <label htmlFor="browse-game-search" className="sr-only">
              Search games
            </label>
            <input
              id="browse-game-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              className="h-9 w-[280px] rounded-full border-2 border-neutral-950 bg-white px-3 text-[16px] font-medium text-neutral-950 outline-none transition focus:border-neutral-600 max-mobile:w-full max-mobile:text-[14px]"
            />
            <Search aria-hidden="true" className="size-7 shrink-0 text-neutral-950" />
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGames.map((game) => (
              <Link
                key={game}
                href={toGameHref(game)}
                className="rounded-lg border border-neutral-200 bg-white px-5 py-4 text-center text-[18px] font-bold leading-snug text-neutral-950 transition hover:border-neutral-950 hover:shadow-sm max-mobile:text-[14px]"
              >
                {game}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-[18px] font-medium text-neutral-600 max-mobile:text-[14px]">
            No results found.
          </p>
        )}
      </div>
    </section>
  );
}
