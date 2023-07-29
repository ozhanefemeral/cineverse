import RecommendedMoviesRow from "@/components/recommendations/recommendations-row";
import { moviedb } from "@/lib/tmdb";
import { CreditsResponse, MovieResponse } from "moviedb-promise";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import MovieRating from "@/components/ui/movie/movie-rating";
import CategoryBadge from "@/components/ui/category/category-badge";

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
    <div className="flex flex-col flex-wrap md:flex-row overflow-hidden justify-center items-stretch">
      <div className="max-w-sm md:w-1/4 h-fit">
        <Image
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title!}
          width={500}
          height={750}
        />
      </div>

      <div className="w-full md:w-3/4 flex flex-col gap-2 p-4 pb-0">
        <h1 className="text-3xl font-bold">{details.title}</h1>
        <p className="text-xl text-gray-400 italic -mt-2">{details.tagline}</p>
        <div className="flex items-end gap-4 pb-4">
          <MovieRating rating={details.vote_average || 0} />{" "}
          {details.vote_average?.toFixed(2)} - voted by {details.vote_count}{" "}
        </div>
        <div className="pt-4">{details.overview}</div>
        <div className="flex flex-row gap-4 mt-auto w-full overflow-x-auto">
          {details.genres?.map((genre) => (
            <>
              {genre.id && (
                <CategoryBadge
                  genreId={genre.id}
                  key={`${details.id}-${genre.id}`}
                />
              )}
            </>
          ))}
        </div>
        {cast && (
          <div className="pt-4">
            <h3 className="text-xl font-bold">Cast</h3>
            <div className="flex flex-row gap-4 overflow-x-scroll w-full py-2 pb-6 mt-auto">
              {cast.slice(0, 15).map((actor) => (
                <div
                  key={actor.id}
                  className="flex flex-col border rounded-lg overflow-hidden w-1/3 md:w-1/6 shrink-0 justify-evenly items-center"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name + " poster"}
                    width={150}
                    height={200}
                  />
                  <p className="text-center text-sm md:text-base p-2 px-2 md:px-4">
                    {actor.name}
                  </p>
                  <p className="text-center text-sm md:text-base w-full px-2 md:px-4 py-2 font-light text-gray-400">
                    {actor.character}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full p-4">
        <h2 className="text-xl pb-4 font-bold">You might also like these...</h2>
        <RecommendedMoviesRow basedOn={params.id} />
      </div>
    </div>
  );
}
