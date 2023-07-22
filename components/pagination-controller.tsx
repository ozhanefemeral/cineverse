"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function PaginationController({ total }: { total: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < total;

  const goToPage = (page: number) => {
    const currentUrl = window.location.href;

    if (!canGoBack && page < currentPage) return;
    else if (!canGoForward && page > currentPage) return;

    router.push(
      currentUrl.replace("page=" + currentPage, "page=" + page),
      undefined
    );
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <Button disabled={!canGoBack} onClick={() => goToPage(currentPage - 1)}>
        Previous
      </Button>
      <div className="flex-shrink-0">
        <Select
          name="page"
          value={currentPage.toString()}
          onValueChange={(value) => goToPage(Number(value))}
        >
          <SelectTrigger className="flex-shrink-0">
            <SelectValue placeholder={currentPage} />
          </SelectTrigger>
          <SelectContent className="max-h-60 overflow-y-auto">
            {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
              <SelectItem key={page} value={page.toString()}>
                {page}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        disabled={!canGoForward}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
