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
    return <div>Category not found</div>;
  }

  const { results: movies } = await moviedb.discoverMovie({
    with_genres: category.id,
    page: searchParams.page,
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold py-8">{category.name}</h1>
      <Suspense fallback={<GridLoading />}>
        <Grid>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      </Suspense>
    </div>
  );
}
