'use client';

import { LocationFill } from '@/public/assets/icons/icons';

const LocationField = ({ location, setLocation, fieldStyles, homePage }) => {
  return (
    <label
      htmlFor='location'
      className={`md:w-[calc((100%-70px)/3)] rounded-t-[20px] md:rounded-tr-none md:rounded-s-full ${fieldStyles.label}`}
    >
      <div
        className={`grid-cols-[24px_1fr] border-b md:border-b-0 md:border-e md:rounded-s-full ${fieldStyles.inputContainer}`}
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
      </div>
    </label>
  );
};

export default LocationField;
