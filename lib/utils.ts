import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tmdbApiKey = process.env.TMDB_API_KEY;
export const tmdbAccessToken = process.env.TMDB_ACCESS_TOKEN;
export const tmdbBaseUrl = "https://api.themoviedb.org/3";
export const tmdbFetchOptions = {
  headers: {
    Authorization: `Bearer ${tmdbAccessToken}`,
    "Content-Type": "application/json;",
  },
};

export const removeEmptyQueryParams = (query: any) => {
  const q = { ...query };
  Object.keys(q).forEach((key) => {
    if (!q[key]) delete q[key];
  });
  return q;
};

export const getTmdbImageUrl = (path: string) =>
  `https://image.tmdb.org/t/p/original${path}`;
