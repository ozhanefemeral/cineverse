import RecommendedMoviesRow from "@/components/recommendations/recommendations-row";
import { moviedb } from "@/lib/tmdb";
import { CreditsResponse, MovieResponse } from "moviedb-promise";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import MovieRating from "@/components/ui/movie/movie-rating";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const details = (await moviedb.movieInfo({ id: params.id })) as MovieResponse;
  const { cast } = (await moviedb.movieCredits({
    id: params.id,
  })) as CreditsResponse;

  return (
    <div className="flex flex-col flex-wrap md:flex-row justify-center">
      <div className="w-full md:w-1/3 p-4">
        <Image
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title!}
          width={500}
          height={750}
          className="mx-auto"
        />
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-2 p-4">
        <h1 className="text-3xl font-bold">{details.title}</h1>
        <p className="text-xl text-gray-400 italic -mt-2">{details.tagline}</p>
        <div className="pb-4">
          <MovieRating rating={details.vote_average || 0} />
        </div>
        <div className="pt-4">{details.overview}</div>
        {cast && (
          <div className="pt-4">
            <h3 className="text-xl font-bold">Cast</h3>
            <div className="flex flex-row gap-4 overflow-scroll w-full py-2 pb-6">
              {cast.slice(0, 15).map((actor) => (
                <div
                  key={actor.id}
                  className="flex flex-col border rounded-lg overflow-hidden w-1/3 md:w-1/6 shrink-0 justify-evenly"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={actor.name + " poster"}
                      width={150}
                      height={200}
                    />
                  </div>
                  <p className="text-center text-sm md:text-base p-2 px-2 md:px-4">
                    {actor.name}
                  </p>
                  <p className="text-center text-sm md:text-base w-full px-2 md:px-4 font-light text-gray-400">
                    {actor.character}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full p-4">
        <h2 className="text-xl py-4 font-bold">You might also like these...</h2>
        <RecommendedMoviesRow basedOn={params.id} />
      </div>
    </div>
  );
}
