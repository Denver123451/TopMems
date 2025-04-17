'use client';

import { HeroUIProvider } from '@heroui/react';
import AppNavbar from ' @/components/Navbar/Navbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <AppNavbar />
      {children}
    </HeroUIProvider>
  );
}
