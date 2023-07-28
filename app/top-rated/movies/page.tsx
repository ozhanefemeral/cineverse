import GridLoading from "@/components/grid-loading";
import { Button } from "@/components/ui/button";
import CategoryHeader from "@/components/ui/category/category-header";
import Grid from "@/components/ui/grid";
import MovieCard from "@/components/ui/movie/movie-card";
import { moviedb } from "@/lib/tmdb";
import { getCategoryById } from "@/lib/utils";
import { MovieResult } from "moviedb-promise";
import Link from "next/link";
import { Suspense } from "react";

export default async function TopRatedMovies({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { page: number };
}) {
  const {
    results: movies,
    page,
    total_pages: totalPages,
    total_results: totalResults,
  } = (await moviedb.movieTopRated({
    page: searchParams.page,
  })) as {
    results: MovieResult[];
    page: number;
    total_pages: number;
    total_results: number;
  };

  if (!movies) return <div className="text-center">No movies found 😿</div>;
  const category = getCategoryById("top-rated");

  if (!category) {
    return (
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-2xl font-bold text-center py-4">
          Category not found
        </h1>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Suspense fallback={<GridLoading />}>
        <CategoryHeader category={category} />
        <Grid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Suspense>
    </div>
  );
}
