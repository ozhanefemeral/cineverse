"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function MovieSearch({
  vertical = false,
}: {
  vertical?: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [searchInput, setSearchInput] = useState(query || "");

  return (
    <div className="w-full">
      <form action="/movies" method="GET">
        <div
          className={`flex flex-col md:flex-row max-w-sm items-stretch gap-4 ${
            vertical ? "md:flex-col" : ""
          }`}
        >
          <Input type="hidden" name="page" value="1" />
          <Input
            type="text"
            name="query"
            minLength={2}
            placeholder="Start searching movies"
            defaultValue={query || ""}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow w-full md:w-auto"
            autoFocus={false}
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
    </div>
  );
}
