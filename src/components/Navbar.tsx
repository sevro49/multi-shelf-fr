"use client"

import Link from "next/link"
import { Icon } from '@iconify/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navbar_links = [
  { id: 1, name: "Movies", path: "/movies", icon:  <Icon icon="mingcute:movie-line" className="text-xl"/>},
  { id: 2, name: "Tv Shows", path: "/tv-shows", icon:  <Icon icon="ic:outline-movie-creation" className="text-xl"/>},
  { id: 3, name: "Games", path: "/games", icon:  <Icon icon="proicons:game" className="text-xl"/>}
]

const Navbar = () => {
  return (
    <nav className="bg-red-600 py-2 px-4 xl:px-[22rem] flex items-center justify-between w-full">

      {/* Mobile navbar */}
      <Sheet >
        <SheetTrigger className="flex xl:hidden hover:bg-white hover:text-red-600 transition-colors px-1 py-1 rounded-lg">
          <Icon icon="mdi:hamburger-menu" className="text-2xl"/>
        </SheetTrigger>
        <SheetContent side='left' className="bg-red-600 border-none">
          <VisuallyHidden>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Mobile Navigation</SheetDescription>
          </VisuallyHidden>
          <SheetHeader>
            <SheetClose>
              <ul className="mt-6 flex flex-col items-start gap-2">
                {navbar_links.map((link) => (
                <li key={link?.id}>
                  <Link 
                    href={link?.path}
                    className="flex items-center  gap-1 font-semibold hover:bg-red-700 hover:bg-opacity-60 hover:text-white px-1 py-2 rounded-lg transition-colors">
                    {link?.name}
                    {link?.icon}
                  </Link>
                </li>
                ))}
              </ul>
            </SheetClose>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Desktop navbar */}
      <div className='w-full flex items-center justify-between'>
        <Link 
          href="/" 
          className="text-4xl font-bold hover:bg-red-700 hover:bg-opacity-60 hover:text-white px-3 py-1 rounded-lg transition-colors">
          <span className="sm:hidden">MS</span>
          <span className="hidden sm:block">MultiShelf</span>
        </Link>
        <ul className="hidden xl:sticky xl:flex items-center gap-4">
          {navbar_links.map((link) => (
          <li key={link?.id}>
            <Link 
              href={link?.path}
              className="flex items-center gap-1 font-semibold hover:bg-red-700 hover:bg-opacity-60 hover:text-white px-1 py-2 rounded-lg transition-colors">
              {link?.name}
              {link?.icon}
            </Link>
          </li>
          ))}
        </ul>
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-semibold gap-2 focus-visible:outline-none focus-visible:ring-0">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/sevro49.png"/>
                <AvatarFallback>S49</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="-translate-x-4 xl:-translate-x-12 bg-white">
              <DropdownMenuItem><Icon icon="carbon:user" className="text-xl me-2"/> Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Icon icon="material-symbols:logout" className="text-xl me-2"/> Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Navbar