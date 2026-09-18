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
        <div className="flex items-center justify-between gap-5 max-mobile:flex-col max-mobile:items-stretch">
          <h2 className="text-[48px] font-bold leading-[1.1] text-neutral-950 max-tablet:text-[40px] max-mobile:text-center max-mobile:text-[32px]">
            {title}
          </h2>

          <div className="flex items-center gap-5 max-mobile:w-full max-mobile:justify-center">
            <label htmlFor="browse-game-search" className="sr-only">
              Search games
            </label>

            <input
              id="browse-game-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              className="h-9 w-[280px] rounded-full border-2 border-neutral-950 bg-white px-3 text-[16px] font-medium text-neutral-950 outline-none transition focus:border-neutral-600 max-mobile:w-[163px] max-mobile:text-[14px]"
            />

            <Search aria-hidden="true" className="size-7 shrink-0 text-neutral-950" />
          </div>
        </div>
      </SectionTitle>

      <section className="mt-[24px] px-[max(48px,calc((100vw-1600px)/2))] max-mobile:mt-[64px] max-mobile:px-5">
        {filteredGames.length > 0 ? (
          <div className="grid w-full gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredGames.map((game) => {
              const imageSrc = browseByGameImages[game];

              return (
                <Link
                  key={game}
                  href={toGameHref(game)}
                  className="block w-full max-w-[304px] text-center text-[18px] font-bold leading-snug text-neutral-950 max-mobile:mx-auto max-mobile:w-[250px] max-mobile:max-w-full max-mobile:text-left max-mobile:text-[14px]"
                >
                  <Image
                    src={imageSrc.src}
                    alt=""
                    width={imageSrc.width}
                    height={imageSrc.height}
                    sizes="(max-width: 640px) 250px, 250px"
                    className="mx-auto h-auto max-w-[min(100%,250px)] max-mobile:h-[250px] max-mobile:w-[250px] max-mobile:max-w-full max-mobile:object-cover"
                  />

                  <span className="block py-4 max-mobile:pt-1 max-mobile:pb-0 max-mobile:leading-[1.1]">
                    {game}
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-[18px] font-medium text-neutral-600 max-mobile:text-[14px]">
            No results found.
          </p>
        )}
      </section>
    </>
  );
}