import MovieGrid from "@/components/movie-grid";
import MovieSearch from "@/components/movie-search";

export const dynamic = "force-dynamic";

export default async function MovieSearchResults({
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string };
}) {
  return (
    <div className="p-8">
      <div className="pb-4 border-b">
        <MovieSearch />
        <MovieGrid searchParams={searchParams} />
      </div>
    </div>
  );
}
