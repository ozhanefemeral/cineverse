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

export const movieCategories = [
  {
    id: "28",
    name: "Action",
    slug: "action",
  },
  {
    id: "12",
    name: "Adventure",
    slug: "adventure",
  },
  {
    id: "16",
    name: "Animation",
    slug: "animation",
  },
  {
    id: "35",
    name: "Comedy",
    slug: "comedy",
  },
  {
    id: "80",
    name: "Crime",
    slug: "crime",
  },
  {
    id: "99",
    name: "Documentary",
    slug: "documentary",
  },
  {
    id: "18",
    name: "Drama",
    slug: "drama",
  },
  {
    id: "10751",
    name: "Family",
    slug: "family",
  },
  {
    id: "14",
    name: "Fantasy",
    slug: "fantasy",
  },
  {
    id: "36",
    name: "History",
    slug: "history",
  },
  {
    id: "27",
    name: "Horror",
    slug: "horror",
  },
  {
    id: "10402",
    name: "Music",
    slug: "music",
  },
  {
    id: "9648",
    name: "Mystery",
    slug: "mystery",
  },
  {
    id: "10749",
    name: "Romance",
    slug: "romance",
  },
  {
    id: "878",
    name: "Science Fiction",
    slug: "science-fiction",
  },
  {
    id: "10770",
    name: "TV Movie",
    slug: "tv-movie",
  },
  {
    id: "53",
    name: "Thriller",
    slug: "thriller",
  },
  {
    id: "10752",
    name: "War",
    slug: "war",
  },
  {
    id: "37",
    name: "Western",
    slug: "western",
  },
];

export const getMovieCategoryName = (id: number | string) => {
  const idString = id.toString();
  const category = movieCategories.find((c) => c.id === idString);
  return category ? category.name : "";
};

export const getMovieCategoryId = (slug: string): string => {
  const category = movieCategories.find((c) => c.slug === slug);
  return category ? category.id : "0";
};

export const getMovieCategorySlug = (id: number): string => {
  const idString = id.toString();
  const category = movieCategories.find((c) => c.id === idString);
  return category ? category.slug : "";
};
