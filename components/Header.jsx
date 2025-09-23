'use client';

import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { Menu } from '@/public/assets/icons/icons';

import Button from './Button';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import SearchBar from './searchBar.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const { theme } = useTheme();

  const homePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);
    };

    if (homePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // initial check
    } else {
      setIsScrolled(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className={`top-0 w-full py-6 flex items-center z-30 transition-all ${homePage ? 'fixed' : 'sticky'} ${
        !isScrolled && homePage ? 'bg-transparent' : 'bg-bg/50 backdrop-blur-[6px] border-b border-border'
      }`}
    >
      <nav className='container flex justify-between items-center'>
        {/* Logo */}
        <Logo
          variant={isScrolled && theme === 'light' ? 'black' : 'white'}
          className='w-[140] md:w-[154px] lg:w-[166px]'
        />

        {/* SearchBar */}
        {pathname.includes('/search') && <SearchBar />}

        <div className='flex items-center gap-2 md:gap-4'>
          {/* Theme Switcher */}
          <ThemeSwitcher iconColor={!isScrolled && homePage ? 'text-white' : ''} />
          {/* Menu */}
          <IconButton variant='text' sx={{ fontSize: '30px', padding: '2px' }} className='md:!hidden'>
            <Menu className={`size-[30px] ${!isScrolled && homePage ? 'text-white' : 'text-text'}`} />
          </IconButton>
          {/* List Business */}
          <Button
            variant='outlined'
            textColor={!isScrolled && homePage ? 'white' : ''}
            className='!hidden md:!inline-flex'
          >
            List Your Business
          </Button>
          {/* Login */}
          {!pathname.includes('/search') && (
            <Button variant='contained' className='!hidden md:!inline-flex'>
              Log In
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
