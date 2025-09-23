'use client';

import { ArrowDown, SuccessFill } from '@/public/assets/icons/icons';

const AvailabilityField = ({ availability, setAvailability, fieldStyles, homePage }) => {
  return (
    <label htmlFor='availability' className={`md:w-[calc((100%-70px)/3)] ${fieldStyles.label}`}>
      <div className={`grid-cols-[24px_1fr_20px] border-b md:border-b-0 md:border-e ${fieldStyles.inputContainer}`}>
        <SuccessFill className={`size-6 ${homePage ? 'text-white' : 'text-primary'}`} />
        <input
          onChange={e => setAvailability(e.target.value)}
          value={availability || ''}
          name='availability'
          id='availability'
          type='text'
          placeholder='Availability'
          className={`${fieldStyles.input}`}
          readOnly
        />
        <ArrowDown className='text-[#B4B4B4] size-5' />
      </div>
    </label>
  );
};

export default AvailabilityField;
