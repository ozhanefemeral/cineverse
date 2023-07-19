import TrendingGrid from "@/components/trending/trending-grid";
import { Suspense } from "react";

export default async function TrendingMovies() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <TrendingGrid />
      </Suspense>
    </>
  );
}
