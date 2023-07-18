import BookGrid from "@/components/movie-grid";
import BookSearch from "@/components/movie-search";

export const dynamic = "force-dynamic";

export default async function BookSearchResults({
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string };
}) {
  return (
    <div className="p-8">
      <div className="pb-4 border-b">
        <BookSearch />
        <BookGrid searchParams={searchParams} />
      </div>
    </div>
  );
}
