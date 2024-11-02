import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
