import { moviedb } from "@/lib/tmdb";
import { getMovieCategoryId, getMovieCategoryName } from "@/lib/utils";
import PaginatedGrid from "@/components/paginated-grid";

export default async function MovieDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const categoryId = getMovieCategoryId(slug);
  const category = getMovieCategoryName(categoryId);

  const {
    results: movies,
    total_results: totalResults,
    total_pages: totalPages,
  } = await moviedb.discoverMovie({
    with_genres: getMovieCategoryId(slug),
  });

  const isEmpty = !movies || movies.length === 0;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">{category}</h1>
      <PaginatedGrid
        fetchType="category"
        searchParams={{
          category: categoryId,
          query: "",
        }}
      />
    </div>
  );
}
