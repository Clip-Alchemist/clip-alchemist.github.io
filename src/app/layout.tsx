import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui-elements/header";
import Footer from "@/components/ui-elements/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Noto_Sans } from "next/font/google";
const NotoSansFont = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NotoSansFont.className}>
      {/* cSpell:disable-next-line */}
      <GoogleAnalytics gaId="G-K7M7N0KCNK" />
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: {
    default: "Clip Alchemist",
    template: "%s | Clip Alchemist",
  },
  description:
    "Clip Alchemist is a open source video editing software that gives you the freedom to edit your videos.",
  metadataBase: new URL("https://clip-alchemist.github.io/"),
  openGraph: {},
  icons: {
    icon: "icon.jpg",
  },
  verification: {
    // cSpell:disable-next-line
    google: "rfKiLBvqtBkqwBWnhRbMVxM5srANIl73OuriqZd24",
  },
  alternates: {
    canonical: "/",
  },
};
