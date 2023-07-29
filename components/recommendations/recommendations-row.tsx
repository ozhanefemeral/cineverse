import { moviedb } from "@/lib/tmdb";
import Image from "next/image";
import Link from "next/link";

async function getMovieRecommendations(movieId: string) {
  const response = await moviedb.movieRecommendations({ id: movieId });

  return response;
}

export default async function RecommendedMoviesRow({
  basedOn,
}: {
  basedOn: string;
}) {
  const {
    page,
    results: movies,
    total_pages: totalPages,
    total_results: totalResults,
  } = await getMovieRecommendations(basedOn);

  if (totalResults === 0 || !movies)
    return (
      <p className="text-gray-400">No recommendations found 😿</p>
    );

  return (
    <div className="flex flex-row gap-8 overflow-x-scroll w-full">
      {movies.map((movie) => (
        <Link
          href={`/movies/${movie.id}`}
          key={movie.id}
          className="shrink-0 max-w-[200px]"
        >
          <div key={movie.id} className="flex flex-col gap-2">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title + " poster"}
              className="w-full rounded-lg shadow-md"
              width={200}
              height={300}
            />
            <p className="text-center text-sm">{movie.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
