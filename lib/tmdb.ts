import { MovieDb, SearchMovieRequest } from "moviedb-promise";
import { tmdbApiKey } from "./utils";

export const moviedb = new MovieDb(tmdbApiKey);