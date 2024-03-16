import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui-elements/header";
import Footer from "@/components/ui-elements/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
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
  description: "Clip Alchemist is a open source video editing software that gives you the freedom to edit your videos.",
};
