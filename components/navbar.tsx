"use client";

import { cn, movieCategories } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import cineverseLogo from "@/public/cineverse.svg";
import MovieSearch from "./movie-search";
import FloatingMenu from "./floating-menu";

export default function Navbar({ className }: { className?: string }) {
  return (
    <>
      <FloatingMenu />
      <div className="hidden lg:block md:relative scrollable-container flex-none border-r p-3 lg:w-60 xl:w-72">
        <div className="py-4">
          <div className="px-3 flex justify-center">
            <Button asChild variant="link">
              <Link href="/" className="flex gap-2 mb-6">
                <Image
                  src={cineverseLogo}
                  alt="Cineverse Logo"
                  width={40}
                  height={40}
                  unoptimized
                />
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold">
                  Cineverse
                </h1>
              </Link>
            </Button>
          </div>
          <div className="px-3 pb-8">
            <Link
              className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b justify-end from-red-500 to-red-900 p-4 py-8 focus:shadow-md mb-4"
              href="/trending/movies"
            >
              <div className="text-lg font-medium text-center">
                Trending Movies 🍿
              </div>
            </Link>
            <Link
              className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b justify-end from-blue-500 to-blue-900 p-4 py-8 focus:shadow-md mb-4"
              href="/top-rated/movies"
            >
              <div className="text-lg font-medium text-center">
                Top Rated 🌟
              </div>
            </Link>
            <MovieSearch vertical />
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 text-xl text-center font-semibold">
              Categories
            </h2>
            <div className="space-y-1">
              <ul className="grid grid-cols-1 xl:grid-cols-2 text-center gap-2">
                {movieCategories
                  .filter((m) => !m.isSpecial)
                  .map((category) => (
                    <Button asChild variant="link" key={category.id}>
                      <Link
                        href={`/categories/${category.slug}`}
                        key={category.id}
                      >
                        {category.name}
                      </Link>
                    </Button>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
