import { Button } from "@/components/ui/button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <section id="404page" className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl sm:text-7xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl sm:text-3xl xl:text-5xl">This page could not be found.</h2>
      <Button className="mt-2 bg-red-600 hover:bg-red-700 focus-visible:ring-0 focus-visible:outline-none">
        <Link href='/'>Home Page</Link>
      </Button>
    </section>
  );
};

export default Custom404;
