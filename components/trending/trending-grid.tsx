import { moviedb } from "@/lib/tmdb";
import { MovieResult } from "moviedb-promise";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { getTmdbImageUrl } from "@/lib/utils";
import MovieCard from "../ui/movie/movie-card";

type timeWindow = "day" | "week";

async function getTrendingMovies({
  timeWindow = "week",
}: {
  timeWindow: timeWindow;
}) {
  const response = await moviedb.trending({
    media_type: "movie",
    time_window: timeWindow,
  });

  return response;
}

export default async function TrendingGrid() {
  const {
    results,
    page,
    total_pages: totalPages,
    total_results: totalResults,
  } = await getTrendingMovies({ timeWindow: "week" });

  if (!results || results.length === 0) {
    return <p>Not found</p>;
  }

  const movies = results.slice(0, 8) as MovieResult[];

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-primary pb-4">Trending</h1>
      <div className="w-full md:w-fit text-center pb-4 md:pt-0 text-lg ">
        Showing&nbsp;
        <span className="font-bold text-primary">
          {results.length} trending movies&nbsp;
        </span>
        of the last week
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
