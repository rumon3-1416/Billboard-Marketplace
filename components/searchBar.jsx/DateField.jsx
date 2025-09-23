'use client';

import { CalendarFill } from '@/public/assets/icons/icons';

const DateField = ({ date, setDate, fieldStyles, homePage }) => {
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
    </label>
  );
};

export default DateField;
