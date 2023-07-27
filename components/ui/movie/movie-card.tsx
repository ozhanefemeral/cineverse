import { MovieResult } from "moviedb-promise";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { getTmdbImageUrl } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import CategoryBadge from "./category-badge";
import MovieRating from "./movie-rating";

export default function MovieCard({ movie }: { movie: MovieResult }) {
  return (
    <Card className="flex flex-col gap-2 shrink-0">
      <CardHeader className="w-full p-0">
        <Image
          src={getTmdbImageUrl(movie.poster_path || "")}
          alt={movie.title!}
          width={300}
          height={200}
          className="w-full rounded-tl-lg rounded-tr-lg"
        />
        <CardTitle className="py-2 px-4 text-center text-md md:text-lg">
          {movie.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-wrap gap-2 justify-center items-center">
          {movie.genre_ids?.map((genreId) => (
            <CategoryBadge genreId={genreId} key={`${movie.id}-${genreId}`} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-col items-start gap-2">
        <div className="flex w-full flex-col md:flex-row gap-4 justify-between">
          <MovieRating rating={movie.vote_average || 0} />
          <Button asChild>
            <Link href={`/movies/${movie.id}`}>Details</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
