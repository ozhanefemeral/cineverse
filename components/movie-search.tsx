"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function MovieSearch() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [searchInput, setSearchInput] = useState(query || "");

  return (
    <form action="/movies" method="GET">
      <div className="flex w-full flex-col md:flex-row max-w-sm items-center gap-4">
        <Input type="hidden" name="page" value="1" />
        <Input type="hidden" name="results_per_page" value="12" />
        <Input
          type="text"
          name="query"
          minLength={2}
          placeholder="Start searching movies"
          defaultValue={query || ""}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow w-full md:w-auto"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
