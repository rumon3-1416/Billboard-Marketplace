'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import SearchBar from './common/SearchBar';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);
    };

    if (pathname === '/') {
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
      className={`top-0 w-full py-6 flex items-center z-30 transition-all ${pathname === '/' ? 'fixed' : 'sticky'} ${
        !isScrolled && pathname === '/' ? 'bg-transparent' : 'bg-bg/50 backdrop-blur-[6px] border-b border-border'
      }`}
    >
      <nav className='container flex justify-between items-center'>
        <Logo variant={isScrolled && theme === 'light' ? 'black' : 'white'} className='h-[58px]' />

        {pathname.includes('/search') && <SearchBar />}

        <div className='flex items-center gap-4'>
          <ThemeSwitcher iconColor={!isScrolled && pathname === '/' ? 'text-white' : ''} />
          <Button variant='outlined' textColor={!isScrolled && pathname === '/' ? 'white' : ''}>
            List Your Business
          </Button>
          {!pathname.includes('/search') && <Button variant='contained'>Log In</Button>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
