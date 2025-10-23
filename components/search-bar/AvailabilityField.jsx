'use client';

import { useEffect, useRef, useState } from 'react';

import { ArrowDown, SuccessFill } from '@/public/assets/icons/icons';
import AvailabilityDropdown from './AvailabilityDropdown';
import ClearInput from './ClearInput';

const AvailabilityField = ({ availability, setAvailability, fieldStyles, homePage }) => {
  const availabilityRef = useRef(null);

  const [showDropdown, setShowDropDown] = useState(false);

  // Handle Outside Click
  useEffect(() => {
    const handleClick = event => {
      if (availabilityRef.current && !availabilityRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <label
      htmlFor='availability'
      ref={availabilityRef}
      onMouseDown={() => setShowDropDown(true)}
      className={`md:w-[calc((100%-70px)/3)] ${fieldStyles.label}`}
    >
      <div className={`border-b md:border-b-0 md:border-e ${fieldStyles.inputContainer}`}>
        <SuccessFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
        <input
          onChange={e => setAvailability(e.target.value)}
          value={availability?.title || ''}
          name='availability'
          id='availability'
          type='text'
          placeholder='Availability'
          className={`${fieldStyles.input}`}
          readOnly
        />
        {availability ? (
          <ClearInput onClick={() => setAvailability(null)} className={`size-5 text-r-text`} />
        ) : (
          <ArrowDown
            className={`text-[#B4B4B4] size-5 transition-transform duration-300 ${
              showDropdown ? '-rotate-180' : 'rotate-0'
            }`}
          />
        )}
      </div>

      {showDropdown && <AvailabilityDropdown setAvailability={setAvailability} />}
    </label>
  );
};

export default AvailabilityField;
