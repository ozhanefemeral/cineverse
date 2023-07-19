import { moviedb } from "@/lib/tmdb";
import { MovieResponse } from "moviedb-promise";
import Image from "next/image";

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const details = (await moviedb.movieInfo({ id: params.id })) as MovieResponse;

  return (
    <div className="flex flex-col md:flex-row max-w-screen-lg justify-center">
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
      </div>
    </div>
  );
}
