import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MultiShelf",
  description: "A platform where users can discover, review, and discuss various series, movies, and games in a social media-like environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
