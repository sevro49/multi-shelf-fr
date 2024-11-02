"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { Separator } from "@/components/ui/separator"

const footer_links = [
  { id: 1, name: "Movies", path: "/movies", icon:  <Icon icon="mingcute:movie-line" className="text-xl"/>},
  { id: 2, name: "Tv Shows", path: "/tv-shows", icon:  <Icon icon="ic:outline-movie-creation" className="text-xl"/>},
  { id: 3, name: "Games", path: "/games", icon:  <Icon icon="proicons:game" className="text-xl"/>}
]

const Footer = () => {
  return (
    <footer className='bg-red-600 py-12 px-4 xl:px-[22rem] '>
      <div className='grid grid-cols-3 gap-10 md:gap-4'>
        <div className='col-span-3 md:col-span-1 flex justify-center md:self-start'>
          <Link 
            href="/" 
            className="inline-block text-4xl font-bold hover:bg-red-700 hover:bg-opacity-60 hover:text-white px-3 py-1 rounded-lg transition-colors">
            <span>MultiShelf</span>
          </Link>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <h2 className='text-2xl font-bold text-center'>Site Navigation</h2>
          <div>
            <ul className="mt-2 flex flex-col items-center md:items-start gap-1 md:gap-2">
              {footer_links.map((link) => (
              <li key={link?.id}>
                <Link 
                  href={link?.path}
                  className="flex items-center gap-1 font-semibold hover:bg-red-700 hover:bg-opacity-60 hover:text-white px-1 py-2 rounded-lg transition-colors">
                  {link?.name}
                </Link>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <h2 className='text-2xl font-bold text-center'>Contact</h2>
          <div className="mt-2 sm:mt-4 flex gap-4 items-center justify-center">
            <Link href='/' target="_blank" className='p-1 group hover:bg-red-700 rounded-md'>
              <Icon icon="mdi:instagram" className="text-2xl group-hover:text-white transition-colors rounded-md"/>
            </Link>
            <Link href='/' target="_blank" className='p-1 group hover:bg-red-700 rounded-md'>
              <Icon icon="ri:twitter-x-fill" className="text-2xl group-hover:text-white transition-colors rounded-md"/>
            </Link>
            <Link href='/' target="_blank" className='p-1 group hover:bg-red-700 rounded-md'>
              <Icon icon="ri:facebook-fill" className="text-2xl group-hover:text-white transition-colors rounded-md"/>
            </Link>
          </div>
        </div>
      </div>
      <Separator className='bg-black my-6'/>
      <div className='flex justify-between'>
        <p className=''>&copy; 2024 MultiShelf. All rights reserved.</p>
        <p>Developed by
          <Link href='https://emreguler.com.tr' target="_blank" className="font-bold"> @sevro49</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer