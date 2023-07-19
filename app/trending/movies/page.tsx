import GridLoading from "@/components/grid-loading";
import TrendingGrid from "@/components/trending/trending-grid";
import { Suspense } from "react";

export default async function TrendingMovies() {
  return (
    <>
      <Suspense fallback={<GridLoading />}>
        <TrendingGrid />
      </Suspense>
    </>
  );
}
