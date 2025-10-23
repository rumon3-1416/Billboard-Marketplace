'use client';

import { useEffect, useRef, useState } from 'react';

import { ArrowDown, CalendarFill } from '@/public/assets/icons/icons';
import DateDropdown from './DateDropdown';
import ClearInput from './ClearInput';

const DateField = ({ date, setDate, fieldStyles, homePage }) => {
  const dateRef = useRef(null);
  const [showDropdown, setShowDropDown] = useState(false);

  // Handle Outside Click
  useEffect(() => {
    const handleClick = event => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
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
      htmlFor='date'
      ref={dateRef}
      onMouseDown={() => setShowDropDown(true)}
      className={`md:w-[calc((100%-70px)/3+70px)] md:!pe-[70px] md:rounded-e-full ${fieldStyles.label}`}
    >
      <div className={`${fieldStyles.inputContainer}`}>
        <CalendarFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
        <input
          onChange={e => setDate(e.target.value)}
          value={date || ''}
          name='date'
          id='date'
          type='text'
          placeholder='DateFill'
          className={`${fieldStyles.input}`}
          readOnly
        />
        {date ? (
          <ClearInput onClick={() => setDate(null)} className={`size-5 text-r-text`} />
        ) : (
          <ArrowDown
            className={`text-[#B4B4B4] size-5 transition-transform duration-300 ${
              showDropdown ? '-rotate-180' : 'rotate-0'
            }`}
          />
        )}
      </div>

      {showDropdown && <DateDropdown date={date} setDate={setDate} setShowDropDown={setShowDropDown} />}
    </label>
  );
};

export default DateField;
