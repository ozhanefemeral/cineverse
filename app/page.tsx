import { Button } from "@/components/ui/button";
import { tmdbAccessToken, tmdbBaseUrl } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const url = tmdbBaseUrl + "/authentication";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + tmdbAccessToken,
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center p-4 gap-2">
        <h1 className="text-4xl font-bold">Cineverse</h1>
        <p className="text-2xl">Exploring Movies Made Easy 🍿</p>
        <div className="flex flex-col items-stretch justify-center p-4 gap-2">
          <Button asChild variant="default">
            <Link href="/trending/movies">Browse Trending Movies</Link>
          </Button>
          <span className="text-center">or</span>
          <Button asChild variant="outline">
            <Link href="/tv">Browse TV Shows</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
