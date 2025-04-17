'use client';

import Image from 'next/image';
import { useMemes } from ' @/hooks/useMemes';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Link } from '@heroui/react';

export default function List() {
  const { memes } = useMemes();

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-8">
        <Image
          src="/img/image-2.webp"
          alt="Image"
          quality={100}
          width={500}
          height={500}
          className="rounded-[20px] shadow"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <h1 className="text-xl  text-center sm:text-2xl md:text-4xl lg:text-6xl font-bold">
          Найкращі меми Україньською мовою!
        </h1>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        {memes.map((meme) => (
          <Card className="py-4" key={meme.id}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large text-white">{meme.name}</h4>
              <small className="text-default-500">likes {meme.likes}</small>
            </CardHeader>
            <CardBody className="py-2">
              <Link
                className="flex flex-col justify-between h-full"
                href={meme.image}
              >
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={meme.image}
                  width={270}
                  height={270}
                  unoptimized
                />
                <p className="mt-1">{meme.image} </p>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
