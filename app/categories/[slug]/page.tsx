import Grid from "@/components/ui/grid";
import MovieCard from "@/components/ui/movie/movie-card";
import { moviedb } from "@/lib/tmdb";
import { getMovieCategoryId, getMovieCategoryName } from "@/lib/utils";

export default async function MovieDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const categoryId = getMovieCategoryId(slug);
  const category = getMovieCategoryName(categoryId);

  const {
    results: movies,
    total_results: totalResults,
    total_pages: totalPages,
  } = await moviedb.discoverMovie({
    with_genres: getMovieCategoryId(slug),
  });

  const isEmpty = !movies || movies.length === 0;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">{category}</h1>
      <Grid>
        {!isEmpty &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Grid>
    </div>
  );
}
