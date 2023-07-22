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
  const categoryName = getMovieCategoryName(slug);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">{categoryName}</h1>
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
