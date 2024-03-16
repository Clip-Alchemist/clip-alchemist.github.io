import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full text-center grid justify-items-center gap-4 p-12">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p>Could not find requested resource</p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
