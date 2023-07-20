"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import cineverseLogo from "@/public/cineverse.svg";

export default function Navbar() {
  const path = usePathname();

  if (path === "/") {
    return <></>;
  }

  return (
    <div className="py-4 flex justify-between items-center border-b">
      <Button asChild variant="link">
        <Link href="/" className="flex gap-2">
          <Image
            src={cineverseLogo}
            alt="Cineverse Logo"
            width={40}
            height={40}
          />
          <h1 className="text-3xl font-bold">Cineverse</h1>
        </Link>
      </Button>
    </div>
  );
}
