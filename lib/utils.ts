import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tmdbApiKey = process.env.TMDB_API_KEY;
export const tmdbAccessToken = process.env.TMDB_ACCESS_TOKEN;
export const tmdbBaseUrl = "https://api.themoviedb.org/3";