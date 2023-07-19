import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MovieResult } from "moviedb-promise";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tmdbApiKey = process.env.TMDB_API_KEY || "";
export const tmdbAccessToken = process.env.TMDB_ACCESS_TOKEN;
export const tmdbBaseUrl = "https://api.themoviedb.org/3";
export const tmdbFetchOptions = {
  headers: {
    Authorization: `Bearer ${tmdbAccessToken}`,
    "Content-Type": "application/json;",
  },
};

export const removeEmptyQueryParams = (query: { [key: string]: string }) => {
  const q = { ...query };
  Object.keys(q).forEach((key) => {
    if (!q[key]) delete q[key];
  });
  return q;
};

export const getTmdbImageUrl = (path: string) =>
  `https://image.tmdb.org/t/p/original${path}`;

export const formatMovieRating = (rating: number) => {
  return Math.round(rating * 10) / 10;
};

export const getMovieYear = (date: string | undefined) => {
  if (!date) return "Unknown";
  return new Date(date).getFullYear();
};

export const filterMoviesWithoutDetails = (
  movies: MovieResult[] | undefined
) => {
  if (!movies) return [];
  return movies.filter((m) => {
    if (m.vote_average && m.release_date) return m;
  });
};
