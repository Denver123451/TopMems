import Image from 'next/image';

export default function List() {
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
    </section>
  );
}
