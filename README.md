## Live Demo

[https://cineverse-steel.vercel.app/](https://cineverse-steel.vercel.app/)

## Tech Stack

Next 13 with /app directory and Server Components.

[Tailwind](https://tailwindcss.com/) and [shadcn-ui](https://ui.shadcn.com/) for styling and components.

[TMDB API](https://www.themoviedb.org/documentation/api) for movie data and images.


## Development

Clone the repo and install dependencies:

```bash
git clone
cd cineverse
yarn
```

Create a `.env.local` file in the root directory and add your TMDB API key:

```bash
TMDB_API_KEY=your_api_key
```

Start the development server:

```bash
npm run dev
yarn dev
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Deployed with [Vercel](https://vercel.com/) and Vercel CLI.

```bash
npx vercel deploy
```