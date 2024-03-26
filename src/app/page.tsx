import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="p-12 max-w-7xl grid justify-items-center gap-12 w-full">
        {/* catch copy */}
        <div className="grid justify-items-center gap-4 w-full text-center">
          <h2 className="text-4xl font-bold">
            Be the alchemist of your own story.
          </h2>
          <p className="max-w-4xl">
            Clip Alchemist is a open source video editing software that gives
            you the freedom to edit your videos.
            <br />
            Use it in your web browser (Chrome recommended) for quick and easy
            edits, or install it on your computer for access to all its powerful
            features.
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-primary text-white px-4 py-2 rounded-md text-sm">
              Get Started
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/Clip-Alchemist" target="_blank">
                  Start on the Web
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/download" target="_blank">
                  Download for your Computer
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* function introduction */}
        <div className="w-full">
          <div className="flex justify-items-center w-full flex-col gap-4 md:flex-row md:gap-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/clip-alchemist-test.webp"
              alt="function-1"
              className="flex-1 md:w-1/2"
              width={640}
              height={360}
            />
            <div className="flex-1 md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Editing Movies</h2>
              <p>
                You can edit videos by using on the web or installing this app.
                <br />
                You can use basic video editing functions such as cutting videos
                and adding subtitles.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-items-center w-full flex-col gap-4 md:flex-row-reverse md:gap-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/clip-alchemist-test.webp"
              alt="function-2"
              className="flex-1 md:w-1/2"
              width={640}
              height={360}
            />
            <div className="flex-1 md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Extensions</h2>
              <p>
                You can create new extensions.
                <br />
                You can also use them to edit videos with features not
                originally in the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
