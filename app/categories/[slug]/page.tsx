import {
  getCategoryById,
  getMovieCategoryId,
  getMovieCategoryName,
} from "@/lib/utils";
import { Suspense } from "react";
import GridLoading from "@/components/grid-loading";
import Grid from "@/components/ui/grid";
import { moviedb } from "@/lib/tmdb";
import MovieCard from "@/components/ui/movie/movie-card";
import PaginationController from "@/components/pagination-controller";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoryHeader from "@/components/ui/category/category-header";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page: number };
}) {
  const { slug } = params;
  const category = getCategoryById(slug);

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

  const { results: movies, total_pages: totalPages } =
    await moviedb.discoverMovie({
      with_genres: category.id,
      page: searchParams.page,
    });

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
    <div className="w-full flex flex-col items-center justify-center">
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
