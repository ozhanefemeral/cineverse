import GridLoading from "@/components/grid-loading";
import PaginationController from "@/components/pagination-controller";
import { Button } from "@/components/ui/button";
import CategoryHeader from "@/components/ui/category/category-header";
import Grid from "@/components/ui/grid";
import MovieCard from "@/components/ui/movie/movie-card";
import { moviedb } from "@/lib/tmdb";
import { getCategoryById } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default async function TopRatedMovies() {
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

  const {
    results: movies,
    page,
    total_pages: totalPages,
    total_results: totalResults,
  } = await moviedb.movieTopRated();

  if (!movies?.length || !totalPages) {
    return (
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-2xl font-bold text-center py-4">No movies found</h1>
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <CategoryHeader category={category} />
      <Suspense fallback={<GridLoading />}>
        <Grid className="py-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
        <PaginationController total={totalPages} />
      </Suspense>
    </div>
  );
}
