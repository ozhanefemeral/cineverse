import MovieSearch from "@/components/movie-search";
import { SearchMovieRequest } from "moviedb-promise";
import { moviedb } from "@/lib/tmdb";
import Grid from "@/components/ui/grid";
import MovieCard from "@/components/ui/movie/movie-card";

export const dynamic = "force-dynamic";

export default async function MovieSearchResults({
  searchParams,
}: {
  params: {};
  searchParams: SearchMovieRequest;
}) {
  const { query } = searchParams;

  if (!query) {
    return (
      <div className="p-8">
        <h1 className="text-3xl pb-4 font-bold text-center">
          Looks like you forgot to type something 🧐
        </h1>
        <div className="flex w-full justify-center md:justify-start">
          <MovieSearch />
        </div>
      </div>
    );
  }

  const { results: movies } = await moviedb.searchMovie(searchParams);

  return (
    <div className="p-8">
      <div className="pb-4">
        <MovieSearch />
      </div>
      <Grid>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </div>
  );
}
