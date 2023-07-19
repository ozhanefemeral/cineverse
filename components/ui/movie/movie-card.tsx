import { MovieResult } from "moviedb-promise";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import { formatMovieRating, getMovieYear, getTmdbImageUrl } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: MovieResult }) {
  return (
    <Card className="flex flex-col gap-2 shrink-0">
      <CardHeader>
        <CardTitle className="pb-4 text-center text-xl md:text-2xl">
          {movie.title}
        </CardTitle>
        <Image
          src={getTmdbImageUrl(movie.poster_path || "")}
          alt={movie.title!}
          width={250}
          height={200}
          className="mx-auto"
        />
      </CardHeader>
      <CardContent className="mt-auto">
        <div>
          Rating:&nbsp;
          <span className="text-primary">
            {formatMovieRating(movie.vote_average || 0)}
          </span>
        </div>
        <div>
          Year:&nbsp;
          <span className="text-primary">
            {getMovieYear(movie.release_date)}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-row justify-end">
          <Button asChild>
            <Link href={`/movies/${movie.id}`}>Details</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
