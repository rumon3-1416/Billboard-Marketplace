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
      sx={{ fontSize: '20px', fontWeight: '500', padding: '16px', borderRadius: '999px' }}
      className={className}
    >
      {theme === 'light' ? (
        <IconSun className={`${iconColor || 'text-dark'}`} />
      ) : (
        <IconMoonStars className={`${iconColor || 'text-white'}`} />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
