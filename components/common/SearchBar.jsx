'use client';

import { usePathname } from 'next/navigation';
import IconBtn from '@/components/IconBtn';
import { ArrowDown, CalendarFill, LocationFill, MagnifyingGlass, SuccessFill } from '@/public/assets/icons/icons';

const SearchBar = ({ className }) => {
  const pathname = usePathname();

  const homePage = pathname === '/';

  const btnStyles =
    'w-full h-full bg-transparent hover:bg-[#ffffff1f] hover:backdrop-blur-lg py-4 ps-4 transition-colors';
  const btnInnerStyles = `w-full h-full py-3.5 flex justify-between items-center gap-3 ${
    homePage ? 'border-[#FFFFFF1F]' : 'border-border'
  }`;
  const btnTextStyles = `text-lg font-medium leading-[1] ${homePage ? 'text-white' : 'text-text'}`;

  return (
    <div
      className={`relative w-[90%] max-w-[728px] bg-[#FFFFFF24] backdrop-blur-xs border rounded-full grid grid-cols-3 ${
        homePage ? 'border-white/20' : 'border-border'
      } ${className}`}
    >
      {/* LocationFill */}
      <button className={`rounded-s-full ${btnStyles}`}>
        <span className={`pe-4 border-e ${btnInnerStyles}`}>
          <span className='flex items-center gap-3'>
            <LocationFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
            <span className={`${btnTextStyles}`}>LocationFill</span>
          </span>
          <ArrowDown className='text-[#B4B4B4] size-5' />
        </span>
      </button>

      {/* Availability */}
      <button className={`${btnStyles}`}>
        <span className={`pe-4 border-e ${btnInnerStyles}`}>
          <span className='flex items-center gap-3'>
            <SuccessFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
            <span className={`${btnTextStyles}`}>Availability</span>
          </span>
          <ArrowDown className='text-[#B4B4B4] size-5' />
        </span>
      </button>

      {/* Date */}
      <button className={`rounded-e-full pe-[76px] ${btnStyles}`}>
        <span className={`pe-3 ${btnInnerStyles}`}>
          <span className='flex items-center gap-3'>
            <CalendarFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
            <span className={`${btnTextStyles}`}>Date</span>
          </span>
          <ArrowDown className='text-[#B4B4B4] size-5' />
        </span>
      </button>

      <IconBtn variant='primary' className='-translate-y-1/2 !absolute right-4 top-1/2 !p-5'>
        <MagnifyingGlass className='size-5' />
      </IconBtn>
    </div>
  );
};

export default SearchBar;
