import { Card, CardHeader, CardTitle, CardContent } from "../card";
import { Skeleton } from "../skeleton";

export default function MovieCardSkeleton() {
  return (
    <Card className="flex flex-col gap-2 shrink-0">
      <CardHeader>
        <Skeleton className="text-center text-xl md:text-2xl mb-4 h-8" />
        <Skeleton className="mx-auto h-80 w-full" />
      </CardHeader>
      <CardContent className="mt-auto">
        <Skeleton  className="h-8" />
      </CardContent>
    </Card>
  );
}
