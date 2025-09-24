'use client';

import { useEffect, useRef, useState } from 'react';
import { LocationFill } from '@/public/assets/icons/icons';
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
      onFocus={() => setShowDropDown(true)}
      htmlFor='location'
      className={`md:w-[calc((100%-70px)/3)] rounded-t-[20px] md:rounded-tr-none md:rounded-s-full ${fieldStyles.label}`}
    >
      <div
        className={`border-b md:border-b-0 md:border-e md:rounded-s-full ${
          location ? 'grid-cols-[24px_1fr_20px]' : 'grid-cols-[24px_1fr]'
        } ${fieldStyles.inputContainer}`}
      >
        <LocationFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
        <input
          onChange={e => setLocation(e.target.value)}
          value={location || ''}
          name='location'
          id='location'
          type='text'
          placeholder='LocationFill'
          className={`${fieldStyles.input}`}
        />
        {location && <ClearInput onClick={() => setLocation('')} className={`size-5 text-r-text`} />}
      </div>

      {showDropdown && <LocationDropdown setLocation={setLocation} />}
    </label>
  );
};

export default LocationField;
