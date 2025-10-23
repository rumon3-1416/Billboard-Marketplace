'use client';

import { useEffect, useRef, useState } from 'react';

import { ArrowDown, LocationFill } from '@/public/assets/icons/icons';
import LocationDropdown from './LocationDropdown';
import ClearInput from './ClearInput';

const LocationField = ({ location, setLocation, fieldStyles, homePage }) => {
  const locationRef = useRef(null);
  const [showDropdown, setShowDropDown] = useState(false);

  // Handle Outside Click
  useEffect(() => {
    const handleClick = event => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
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
      ref={locationRef}
      onMouseDown={() => setShowDropDown(true)}
      htmlFor='location'
      className={`md:w-[calc((100%-70px)/3)] rounded-t-[20px] md:rounded-tr-none md:rounded-s-full ${fieldStyles.label}`}
    >
      <div className={`border-b md:border-b-0 md:border-e md:rounded-s-full ${fieldStyles.inputContainer}`}>
        <LocationFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
        <input
          onChange={e => setLocation(e.target.value)}
          value={location?.title ?? ''}
          name='location'
          id='location'
          type='text'
          placeholder='LocationFill'
          className={`${fieldStyles.input}`}
          readOnly
        />
        {location ? (
          <ClearInput onClick={() => setLocation(null)} className={`size-5 text-r-text`} />
        ) : (
          <ArrowDown
            className={`text-[#B4B4B4] size-5 transition-transform duration-300 ${
              showDropdown ? '-rotate-180' : 'rotate-0'
            }`}
          />
        )}
      </div>

      {showDropdown && <LocationDropdown setLocation={setLocation} />}
    </label>
  );
};

export default LocationField;

// ${location ? 'grid-cols-[24px_1fr_20px]' : 'grid-cols-[24px_1fr]'}
