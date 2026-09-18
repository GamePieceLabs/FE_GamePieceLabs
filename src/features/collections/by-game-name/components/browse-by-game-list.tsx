"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import type { BrowseByGameContent } from "@/features/collections/by-game-name/data/browse-by-game";
import { browseByGameImages } from "@/features/collections/by-game-name/data/browse-by-game";
import { SectionTitle } from "@/components/shared/section-title/section-title";

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

export function BrowseByGameList({ title, searchPlaceholder, games }: BrowseByGameListProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGames = useMemo(() => {
    if (!normalizedQuery) return games;
    return games.filter((game) => game.toLowerCase().includes(normalizedQuery));
  }, [games, normalizedQuery]);

  return (
    <>
      <SectionTitle>
        <div className="flex items-center justify-between gap-5 max-[700px]:flex-col max-[700px]:items-stretch">
          <h2 className="text-[48px] font-bold leading-[1.1] text-neutral-950 max-tablet:text-[40px] max-[700px]:text-center max-[700px]:text-[32px]">
            {title}
          </h2>

          <div className="flex items-center gap-5 max-[700px]:w-full max-[700px]:justify-center">
            <label htmlFor="browse-game-search" className="sr-only">
              Search games
            </label>

            <input
              id="browse-game-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              className="h-9 w-[280px] rounded-full border-2 border-neutral-950 bg-white px-3 text-[16px] font-medium text-neutral-950 outline-none transition focus:border-neutral-600 max-[600px]:w-[163px] max-[600px]:text-[14px]"
            />

            <Search aria-hidden="true" className="size-7 shrink-0 text-neutral-950" />
          </div>
        </div>
      </SectionTitle>

      <SectionTitle className="pt-0">
        {filteredGames.length > 0 ? (
          <div className="grid w-full grid-cols-5 gap-y-7 max-[1400px]:grid-cols-4 max-[1161px]:grid-cols-3 max-[870px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-y-5">
            {filteredGames.map((game) => {
              const imageSrc = browseByGameImages[game];

              return (
                <Link
                  key={game}
                  href={toGameHref(game)}
                  className="block w-[250px] justify-self-center text-[18px] font-bold leading-snug text-neutral-950 max-[600px]:text-[14px]"
                >
                  <Image
                    src={imageSrc.src}
                    alt=""
                    width={250}
                    height={250}
                    className="block h-[250px] w-[250px] object-cover"
                  />

                  <span className="block w-full pt-1 leading-[1.1]">
                    {game}
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-[18px] font-medium text-neutral-600 max-[600px]:text-[14px]">
            No results found.
          </p>
        )}
      </SectionTitle>
    </>
  );
}