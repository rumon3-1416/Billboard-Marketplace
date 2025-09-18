import Image from 'next/image';
import { Location, Maximize } from '@/public/assets/icons/icons';

const Card = () => {
  return (
    <div
      className={`bg-card p-2 rounded-[40px] shadow-[0_18px_60px_-4px_#18274B1A] cursor-pointer group border border-dark-border`}
    >
      <div className='w-full max-h-[302px] aspect-[4/3] overflow-hidden rounded-[32px]'>
        <Image
          src='/assets/images/billboard-card-1.png'
          alt='img'
          width={420}
          height={360}
          className='w-full max-h-[302px] aspect-[4/3] object-cover rounded-[32px] group-hover:scale-105 transition-transform duration-300'
        />
      </div>

      {/* Desc */}
      <div className='px-4 pt-6 pb-4'>
        <p className='flex items-center gap-1'>
          <Location className='text-primary size-[18px]' />
          <span className='text-text-secondary'>Milano Centrale, Milan, Italy</span>
        </p>
        <h6 className='text-text text-xl font-medium mt-4 mb-5'>Central Station Mega Billboard</h6>
        <div className='flex justify-between items-end pt-3 border-t border-border'>
          <p className='flex items-end leading-[1]'>
            <span className='text-text text-[22px]'>$119.00</span>
            <span className='text-text-secondary'>/month</span>
          </p>

          <p className='flex items-end gap-1.5 text-text'>
            <Maximize className='size-4' />
            <span className='text-sm'>45x22 Feet</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
