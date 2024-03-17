import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Noto_Sans } from "next/font/google";
const NotoSansFont = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function Download() {
  return (
    <main className={`w-full ${NotoSansFont.className}`}>
      <div className="p-12 max-w-7xl grid justify-items-center gap-12 w-ful"></div>
    </main>
  );
}
