'use client';

import { Cross } from '@/public/assets/icons/icons';
import { usePathname } from 'next/navigation';

const ClearInput = ({ onClick, className }) => {
  const pathname = usePathname();
  const homePage = pathname === '/';

  return (
    <span onClick={onClick} className={`cursor-pointer ${className}`}>
      <Cross className={`${homePage ? 'text-white' : 'text-text'}`} />
    </span>
  );
};

export default ClearInput;
