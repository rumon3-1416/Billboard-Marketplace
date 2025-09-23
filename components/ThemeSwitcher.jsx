'use client';

import { IconButton } from '@mui/material';
import { IconSun } from '@tabler/icons-react';
import { IconMoonStars } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = ({ className = '', iconColor }) => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      variant='text'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      sx={{ fontSize: '22px', fontWeight: '500', padding: '10px', borderRadius: '999px' }}
      className={className}
    >
      {theme === 'light' ? (
        <IconSun className={`size-[22px] ${iconColor || 'text-dark'}`} />
      ) : (
        <IconMoonStars className={`size-[22px] ${iconColor || 'text-white'}`} />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
