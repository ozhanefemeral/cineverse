"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import cineverseLogo from "@/public/cineverse.svg";
import MovieSearch from "./movie-search";
import { movieCategories } from "@/lib/utils";

export default function FloatingMenu() {
  return (
    <div className="lg:hidden sticky flex justify-between top-0 p-4 pl-0 z-50 bg-background">
      <Button asChild variant="link">
        <Link href="/" className="flex gap-2">
          <Image
            src={cineverseLogo}
            alt="Cineverse Logo"
            width={40}
            height={40}
          />
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold">
            Cineverse
          </h1>
        </Link>
      </Button>
      <Sheet>
        <Button asChild variant="secondary">
          <SheetTrigger>🍿</SheetTrigger>
        </Button>
        <SheetContent>
          <SheetHeader>
            <div className="py-8">
              <Link
                className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b justify-end from-red-500 to-red-900 p-4 py-8 focus:shadow-md mb-4"
                href="/trending/movies"
              >
                <div className="text-lg font-medium text-center">
                  Trending Movies 🍿
                </div>
              </Link>
              <MovieSearch vertical />
            </div>
            <div className="py-2">
              <h2 className="mb-2 text-xl text-center font-semibold">
                Categories
              </h2>
              <div className="space-y-1">
                <ul className="grid grid-cols-3 text-center gap-2">
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
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
