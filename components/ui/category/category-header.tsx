import { MovieCategory } from "@/lib/utils";

export default function CategoryHeader({
  category,
}: {
  category: MovieCategory;
}) {
  return (
    <div className="py-4 text-center">
      <h1 className="text-2xl font-bold">{category.name}</h1>
      <p className="  text-gray-400">{category.catchphrase}</p>
    </div>
  );
}
