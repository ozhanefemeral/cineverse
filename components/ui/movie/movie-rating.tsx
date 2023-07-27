"use client";

import { Rating } from "@smastrom/react-rating";

export default function MovieRating({ rating }: { rating: number }) {
  const ratingRounded = Math.round(rating * 100) / 100;
  const starRating = ratingRounded / 2;

  return (
    <div className="flex items-center">
      <Rating className="max-w-[150px]" value={starRating} readOnly />
    </div>
  );
}
