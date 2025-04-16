import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';

export const AcmeLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 200 200"
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="#FFD700"
        stroke="#000"
        strokeWidth="4"
      />
      <circle cx="70" cy="80" r="10" fill="#1E90FF" />
      <circle cx="130" cy="80" r="10" fill="#1E90FF" />
      <path
        d="M60,120 Q100,160 140,120"
        stroke="#000"
        strokeWidth="5"
        fill="none"
      />
    </svg>
  );
};

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Table', 'list'];
  return (
    <Navbar position="static" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">Top Memes</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="/">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/list">
            list{' '}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="primary"
              href={index === 0 ? '/' : '/list'}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
