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

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b sticky top-0 z-50 bg-white">
      <a href="/" className="flex gap-4 items-center">
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
      </a>
      <div>
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
    </header>
  );
}
