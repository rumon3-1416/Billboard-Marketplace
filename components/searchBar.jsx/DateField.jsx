'use client';

import { CalendarFill } from '@/public/assets/icons/icons';
import DateDropdown from './DateDropdown';
import { useState } from 'react';

const DateField = ({ date, setDate, fieldStyles, homePage }) => {
  const [showDropdown, setShowDropDown] = useState(false);

  // let dateLabel = lang('anyDate');
  // if (selectedDate === null) dateLabel = lang('anyDate');
  // else if (selectedDate) {
  //   const today = new Date();
  //   const tomorrow = addDays(today, 1);
  //   if (isSameDay(selectedDate, today)) dateLabel = lang('today');
  //   else if (isSameDay(selectedDate, tomorrow)) dateLabel = lang('tomorrow');
  //   else dateLabel = format(selectedDate, 'd MMM yyyy');
  // }

  return (
    <label
      htmlFor='date'
      className={`md:w-[calc((100%-70px)/3+70px)] md:!pe-[70px] md:rounded-e-full ${fieldStyles.label}`}
    >
      <div className={`grid-cols-[24px_1fr] ${fieldStyles.inputContainer}`}>
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
      </div>

      {<DateDropdown date={date} setDate={setDate} setShowDropDown={setShowDropDown} />}
    </label>
  );
};

export default DateField;
