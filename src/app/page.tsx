'use client';

import AppNavbar from ' @/components/Navbar/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <AppNavbar />
      <div className="container items-center justify-items-center mt-8">
        <div className="flex items-center justify-around gap-4">
          <h1 className="text-3xl">Welcome to the world of memes</h1>
          <Image
            src="/img/smailik.svg"
            alt="Background Image"
            quality={100}
            width={200}
            height={200}
            className=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </>
  );
}
