import GridLoading from "@/components/grid-loading";
import Grid from "@/components/ui/grid";
import MovieCard from "@/components/ui/movie/movie-card";
import { moviedb } from "@/lib/tmdb";
import { MovieResult } from "moviedb-promise";
import { Suspense } from "react";

export default async function TrendingMovies() {
  const {
    results: movies,
    page,
    total_pages: totalPages,
    total_results: totalResults,
  } = (await moviedb.trending({
    media_type: "movie",
    time_window: "week",
  })) as {
    results: MovieResult[];
    page: number;
    total_pages: number;
    total_results: number;
  };

  if (!movies) return <div className="text-center">No movies found 😿</div>;

  return (
    <>
      <Suspense fallback={<GridLoading />}>
        <Grid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Suspense>
    </>
  );
}
