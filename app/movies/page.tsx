import PaginatedGrid from "@/components/paginated-grid";
import MovieSearch from "@/components/movie-search";
import { SearchMovieRequest } from "moviedb-promise";

export const dynamic = "force-dynamic";

export default async function MovieSearchResults({
  searchParams,
}: {
  params: {};
  searchParams: SearchMovieRequest
}) {
  return (
    <div className="p-8">
      <div className="pb-4">
        <MovieSearch />
        <PaginatedGrid searchParams={searchParams} fetchType="search"/>
      </div>
    </div>
  );
}
