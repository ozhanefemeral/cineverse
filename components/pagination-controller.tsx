"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
  const pathname = usePathname();
  const currentPage = Number(searchParams.get("page")) || 1;

  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < total;

  const goToPage = (page: number) => {
    if (!canGoBack && page < currentPage) return;
    else if (!canGoForward && page > currentPage) return;

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", page.toString());

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <Button disabled={!canGoBack} onClick={() => goToPage(currentPage - 1)}>
        Previous
      </Button>
      {currentPage}
      <Button
        disabled={!canGoForward}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
