import Link from "next/link";
import { badgeVariants } from "../badge";
import { getMovieCategoryName, getMovieCategorySlug } from "@/lib/utils";

export default function CategoryBadge({ genreId }: { genreId: number }) {
  const slug = getMovieCategorySlug(genreId);
  return (
    <Link
      href={`/categories/${slug}`}
      className={badgeVariants({ variant: "outline" })}
    >
      {getMovieCategoryName(genreId)}
    </Link>
  );
}
