import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import {
  getTmdbImageUrl,
  formatMovieRating,
  getMovieYear,
  filterMoviesWithoutDetails,
} from "@/lib/utils";
import { SearchMovieRequest } from "moviedb-promise";
import { moviedb } from "@/lib/tmdb";

export default async function MovieGrid({
  searchParams,
}: {
  searchParams: SearchMovieRequest;
}) {
  const {
    results,
    total_results: totalResults,
    total_pages: totalPages,
  } = await moviedb.searchMovie(searchParams);

  const movies = filterMoviesWithoutDetails(results);
  const isEmpty = !movies || movies.length === 0;

  return (
    <div>
      {isEmpty && (
        <div className="flex flex-col items-center justify-center py-4">
          <h1 className="text-3xl font-bold text-center">
            Looks like there are no movies here 😿
          </h1>
          <p className="text-center">
            Try searching for something else or check back later.
          </p>
        </div>
      )}
      {!isEmpty && (
        <>
          <div className="flex flex-wrap justify-between items-center md:gap-4 py-4">
            <div className="w-full md:w-fit text-center pt-4 md:pt-0 text-lg">
              Found
              <span className="font-bold text-primary">
                &nbsp;{movies.length}&nbsp;
              </span>
              movie{movies.length > 1 ? "s" : ""}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie, index) => {
              return (
                <Card
                  key={`${movie.title}-${index}`}
                  className="flex flex-col gap-2"
                >
                  <CardHeader>
                    <CardTitle className="text-center pb-4">
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

                  {
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
                  }
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
