'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { PillShape } from '@/public/assets/icons/icons';

const SectionTitlePill = ({ Icon, children, className = '' }) => {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-max mx-auto text-text text-sm uppercase flex items-center gap-1 px-[18px] py-3 border border-border rounded-full transition-colors ${
        mounted &&
        (theme === 'light' ? 'bg-[#F8F8FF]' : 'bg-gradient-to-r from-[#c96dff1e] via-[#A393FF1e] to-[#A393FF1e]')
      } ${className}`}
    >
      {Icon ? Icon : <PillShape className='text-primary size-4' />}
      <span>{children}</span>
    </div>
  );
};

export default SectionTitlePill;
