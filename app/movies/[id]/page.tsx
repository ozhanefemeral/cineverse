import RecommendedMoviesRow from "@/components/recommendations/recommendations-row";
import { moviedb } from "@/lib/tmdb";
import { CreditsResponse, MovieResponse } from "moviedb-promise";
import Image from "next/image";

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
        <h1 className="text-2xl font-bold">{details.title}</h1>
        <div className="text-primary">{details.tagline}</div>
        <div className="text-primary">{details.overview}</div>
        {cast && (
          <div className="py-4">
            <h3 className="text-xl font-bold pb-2">Cast</h3>
            <div className="flex flex-row flex-wrap justify-evenly gap-4">
              {cast.slice(0, 5).map((actor) => (
                <div
                  key={actor.id}
                  className="flex flex-col items-center border rounded-lg overflow-hidden"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name + " poster"}
                    width={150}
                    height={200}
                  />
                  <p className="text-center p-2 px-4">{actor.name}</p>
                  <p className="text-center font-light text-gray-400">{actor.character}</p>
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
