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

export type MovieCategory = {
  id: string;
  name: string;
  slug: string;
  catchphrase: string;
};

export const movieCategories = [
  {
    id: "28",
    name: "Action",
    slug: "action",
    catchphrase:
      "Unleash the Thrills: Action Movies to Pump Up Your Adrenaline!",
  },
  {
    id: "878",
    name: "Science Fiction",
    slug: "science-fiction",
    catchphrase: "Sci-Fi Wonders: Movies that Explore the Unknown!",
  },
  {
    "id": "53",
    "name": "Thriller",
    "slug": "thriller",
    "catchphrase": "Nail-Biting Suspense: Thriller Movies to Keep You Guessing!"
  },
  {
    id: "12",
    name: "Adventure",
    slug: "adventure",
    catchphrase:
      "Embark on Epic Journeys: Adventure Movies for the Brave at Heart!",
  },
  {
    id: "16",
    name: "Animation",
    slug: "animation",
    catchphrase: "Animation Magic: Where Imagination Comes to Life!",
  },
  {
    id: "35",
    name: "Comedy",
    slug: "comedy",
    catchphrase: "Laughs Galore: Hilarious Comedy Movies for All Ages!",
  },
  {
    id: "80",
    name: "Crime",
    slug: "crime",
    catchphrase: "Unraveling Intrigue: Dive into the World of Crime Movies!",
  },
  {
    id: "99",
    name: "Documentary",
    slug: "documentary",
    catchphrase: "Real Stories, Real Lives: Eye-Opening Documentary Films!",
  },
  {
    id: "18",
    name: "Drama",
    slug: "drama",
    catchphrase: "Emotion Unleashed: Gripping Drama Movies to Stir Your Soul!",
  },
  {
    id: "10751",
    name: "Family",
    slug: "family",
    catchphrase: "Bonding Moments: Heartwarming Family Movies for Everyone!",
  },
  {
    id: "14",
    name: "Fantasy",
    slug: "fantasy",
    catchphrase:
      "Enchanted Worlds: Explore Fantastical Realms in Fantasy Movies!",
  },
  {
    id: "36",
    name: "History",
    slug: "history",
    catchphrase:
      "Timeless Chronicles: Dive into History with Captivating Movies!",
  },
  {
    id: "27",
    name: "Horror",
    slug: "horror",
    catchphrase: "Heart-Pounding Chills: Horror Movies to Keep You on Edge!",
  },
  {
    id: "10402",
    name: "Music",
    slug: "music",
    catchphrase: "Rhythm and Melody: Movies that Celebrate the Power of Music!",
  },
  {
    id: "9648",
    name: "Mystery",
    slug: "mystery",
    catchphrase:
      "Unlocking Secrets: Engaging Mystery Movies to Puzzle Your Mind!",
  },
  {
    id: "10749",
    name: "Romance",
    slug: "romance",
    catchphrase: "Love in the Air: Romance Movies to Melt Your Heart!",
  },
  {
    id: "-1",
    name: "Top Rated",
    slug: "top-rated",
    catchphrase:
      "Meet the best of the best movies: the top rated ones of all time!",
  },
  // Add the remaining categories here
] as MovieCategory[];

export const getCategoryById = (slug: string): MovieCategory | null => {
  const category = movieCategories.find((c) => c.slug === slug);
  return category ? category : null;
};

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
