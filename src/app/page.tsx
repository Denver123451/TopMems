'use client';
import Image from 'next/image';
import AppNavbar from ' @/components/Navbar/Navbar';
import {
  Table,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table';
import { TableBody } from '@react-stately/table';
import { list } from ' @/utils/list';
import { Button } from '@heroui/button';
import { useEffect, useState } from 'react';
import { IMeme } from ' @/types/types';
import { EditModal } from ' @/components/Modal/EditModal';

export default function Home() {
  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memes, setMemes] = useState(() =>
    list.map((m) => ({ ...m, likes: 0 })),
  );

  useEffect(() => {
    setMemes((m) =>
      m.map((meme) => ({
        ...meme,
        likes: Math.floor(Math.random() * 100),
        image: window.location.origin + meme.image,
      })),
    );
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
    // Тут можна додати збереження в localStorage або cookies

    console.log(updatedMeme);
    setIsModalOpen(false);
  };

  return (
    <>
      <AppNavbar />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-8">
          <h1 className="text-xl  text-center sm:text-2xl md:text-4xl lg:text-6xl">
            Welcome to the world of memes
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
        <Table aria-label="" className="mt-10">
          <TableHeader>
            <TableColumn>Id</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Likes</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {memes.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-white">{item.id}</TableCell>
                <TableCell className="text-white">{item.name}</TableCell>
                <TableCell className="text-white">{item.likes}</TableCell>
                <TableCell className="text-white">
                  <Button
                    color="primary"
                    variant="light"
                    onPress={() => openEditModal(item)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <EditModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          meme={selectedMeme}
          onSave={saveMeme}
        />
      </div>
    </>
  );
}
