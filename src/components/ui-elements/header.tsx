import { Noto_Serif } from "next/font/google";
import * as React from "react";
const NotoSerifFont = Noto_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b sticky top-0 z-50 bg-white">
      <Link href="/" className="flex gap-4 items-center" prefetch={false}>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="icon"
          src="/image/icon48.webp"
          width={40}
          height={40}
          className="rounded"
        />
        <h1 className={`text-3xl ${NotoSerifFont.className}`}>
          Clip Alchemist
        </h1>
      </Link>
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-52 gap-3 p-4">
                  <ListItem
                    title="Start on the Web"
                    href="/Clip-Alchemist"
                    target="_blank"
                  />
                  <ListItem
                    title="Download for your Computer"
                    href="/download"
                    target="_blank"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer select-none group block h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                href="/docs"
                target="_blank"
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-2xl">☰</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className={cn("text-2xl", NotoSerifFont.className)}>
                <SheetClose asChild>
                  <Link href="/">Clip Alchemist</Link>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>
            <ul>
              <li>
                <SheetClose asChild>
                  <Link href="/download" className="w-full p-2">
                    Download
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link href="/docs" className="w-full p-2">
                    Documentation
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
