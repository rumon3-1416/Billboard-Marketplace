'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MagnifyingGlass } from '@/public/assets/icons/icons';
import IconBtn from '@/components/IconBtn';

import LocationField from './LocationField';
import AvailabilityField from './AvailabilityField';
import DateField from './DateField';

const SearchBar = ({ className }) => {
  const [location, setLocation] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [date, setDate] = useState(null);

  const pathname = usePathname();
  const homePage = pathname === '/';

  const fieldStyles = {
    label: `w-full h-full bg-transparent hover:bg-[#ffffff1f] hover:backdrop-blur-lg px-4 md:px-0 md:py-4 transition-colors`,
    inputContainer: `grid items-center gap-3 md:px-4 py-2 md:py-0 ${homePage ? 'border-[#FFFFFF1F]' : 'border-border'}`,
    input: `w-full h-full py-3.5 outline-none ${
      homePage ? 'placeholder-white text-white' : 'placeholder-text text-text'
    }`
  };

  return (
    <div
      className={`relative w-[90%] max-w-[728px] bg-[#FFFFFF24] backdrop-blur-xs border rounded-[20px] md:rounded-full flex flex-col md:flex-row ${
        homePage ? 'border-white/20' : 'border-border'
      } ${className}`}
    >
      {/* LocationFill */}
      <LocationField location={location} setLocation={setLocation} fieldStyles={fieldStyles} homePage={homePage} />

      {/* Availability */}
      <AvailabilityField
        availability={availability}
        setAvailability={setAvailability}
        fieldStyles={fieldStyles}
        homePage={homePage}
      />

      {/* Date */}
      <DateField date={date} setDate={setDate} fieldStyles={fieldStyles} homePage={homePage} />

      <IconBtn
        variant='primary'
        className='md:!-translate-y-1/2 md:!absolute md:!top-1/2 md:!right-2.5 !p-3.5 lg:!p-5 !mx-5 md:!mx-0 !mt-1 !mb-5 md:!mt-0 md:!mb-0'
      >
        <MagnifyingGlass className='size-5' />
        <span className='md:hidden ms-1.5'>Search</span>
      </IconBtn>
    </div>
  );
};

export default SearchBar;
