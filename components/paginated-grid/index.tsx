import { filterMoviesWithoutDetails, getMovieCategoryId } from "@/lib/utils";
import { SearchMovieRequest } from "moviedb-promise";
import { moviedb } from "@/lib/tmdb";
import MovieCard from "../ui/movie/movie-card";
import PaginationController from "../pagination-controller";
import Grid from "../ui/grid";
import { Suspense } from "react";
import GridLoading from "../grid-loading";

export type movieFetchType = "search" | "category";

type MovieGridProps = {
  searchParams: SearchMovieRequest & { category?: string };
  fetchType: movieFetchType;
};

async function MovieGrid({ searchParams, fetchType }: MovieGridProps) {
  let response;

  switch (fetchType) {
    case "search":
      if (!searchParams.query) return;
      response = await moviedb.searchMovie(searchParams);
      break;
    case "category":
      response = await moviedb.discoverMovie({
        with_genres: searchParams.category,
        ...searchParams,
      });

      break;
  }

  const { total_pages: totalPages, total_results: totalResults } = response || {
    total_pages: 0,
    total_results: 0,
  };
  const movies = filterMoviesWithoutDetails(response?.results);

  const isEmpty = !movies || !totalResults || !totalPages;

  return (
    <div>
      {isEmpty && (
        <div className="flex flex-col items-center justify-center py-4">
          <h1 className="text-3xl font-bold text-center">
            Looks like there are no movies here 😿
          </h1>
          <p className="text-center">
            Try searching for something else or check back later.
          </p>
        </div>
      )}
      {!isEmpty && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-center md:gap-4 py-4">
            <div className="w-full md:w-fit text-center pt-4 md:pt-0 text-lg">
              Found
              <span className="font-bold text-primary">
                &nbsp;{totalResults}&nbsp;
              </span>
              movie{totalResults > 1 ? "s" : ""}
            </div>
          </div>
          <PaginationController total={totalPages} />
          <Grid>
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </Grid>
          <PaginationController total={totalPages} />
        </div>
      )}
    </div>
  );
}

export default async function PaginatedGrid({
  searchParams,
  fetchType,
}: MovieGridProps) {
  return (
    <Suspense fallback={<GridLoading />}>
      <MovieGrid searchParams={searchParams} fetchType={fetchType} />
    </Suspense>
  );
}
