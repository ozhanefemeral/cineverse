import MovieCardSkeleton from "./ui/movie/movie-card-skeleton";

export default function GridLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
      {Array.from({ length: 8 }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
}
