'use client';
import Image from 'next/image';
import { list } from ' @/utils/list';
import { useEffect, useState } from 'react';
import { IMeme } from ' @/types/types';
import { EditModal } from ' @/components/EditModal/EditModal';
import MemesTable from ' @/components/MemesTable/MemesTable';

const STORAGE_KEY = 'memes';

export default function Home() {
  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memes, setMemes] = useState<IMeme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      const initial = list.map((m) => ({
        ...m,
        likes: Math.floor(Math.random() * 100),
        image: window.location.origin + m.image,
      }));
      setMemes(initial);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    }
  }, []);

  const openEditModal = (meme: IMeme) => {
    setSelectedMeme(meme);
    setIsModalOpen(true);
  };

  const saveMeme = (updatedMeme: IMeme) => {
    const newMemes = memes.map((m) =>
      m.id === updatedMeme.id ? updatedMeme : m,
    );
    setMemes(newMemes);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newMemes));
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-8">
          <h1 className="text-xl  text-center sm:text-2xl md:text-4xl lg:text-6xl font-bold">
            Ласкаво просимо у світ мемів
          </h1>
          <Image
            src="/img/image-1.webp"
            alt="Image"
            quality={100}
            width={500}
            height={500}
            className="rounded-[20px] shadow"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <MemesTable memes={memes} openEditModal={openEditModal} />

        <EditModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          meme={selectedMeme}
          onSave={saveMeme}
        />
      </section>
    </>
  );
}
