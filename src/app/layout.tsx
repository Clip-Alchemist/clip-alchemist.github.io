import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui-elements/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: {
    default: "Clip Alchemist",
    template: "%s | Clip Alchemist",
  },
};
