"use client";

import * as React from "react";
import Link from "next/link";

import { cn, movieCategories } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import cineverseLogo from "@/public/cineverse.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  if (path === "/") {
    return <></>;
  }
  return (
    <NavigationMenu className="p-4">
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
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trending</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link href="/trending/movies" legacyBehavior passHref>
                  <NavigationMenuLink asChild>
                    <a className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b justify-end from-red-500 to-red-900 p-6 no-underline outline-none focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Trending Movies 🍿
                      </div>
                      <p className="text-sm leading-tight">
                        Your Ticket to the Latest Hits: Unveiling the Trending
                        Movies!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[500px] grid-cols-3 md:grid-cols-4 lg:w-[600px] ">
              {movieCategories.map((category) => (
                // <NavigationMenuLink asChild>
                //   <ListItem
                //     key={category.id}
                //     title={category.name}
                //     href={`/categories/${category.slug}`}
                //   ></ListItem>
                // </NavigationMenuLink>
                <Link
                  href={`/categories/${category.slug}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {category.name}
                  </NavigationMenuLink>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
