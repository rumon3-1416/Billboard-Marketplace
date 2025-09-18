import IconBtn from '@/components/IconBtn';
import { ArrowDown, CalendarFill, LocationFill, MagnifyingGlass, SuccessFill } from '@/public/assets/icons/icons';

const HeroSearch = ({ className }) => {
  const btnStyles =
    'w-full h-full bg-transparent hover:bg-[#ffffff1f] hover:backdrop-blur-lg py-4 ps-4 transition-colors';
  const btnInnerStyles = 'w-full h-full py-3.5 flex justify-between items-center gap-3 border-[#FFFFFF1F]';
  const btnTextStyles = 'text-white text-lg font-medium leading-[1]';

  return (
    <div
      className={`relative w-[90%] max-w-[728px] bg-[#FFFFFF24] backdrop-blur-xs border border-white/20 rounded-full grid grid-cols-3 ${className}`}
    >
      {/* LocationFill */}
      <button className={`rounded-s-full ${btnStyles}`}>
        <span className={`pe-4 border-e ${btnInnerStyles}`}>
          <span className='flex items-center gap-3'>
            <LocationFill className='text-white size-6' />
            <span className={`${btnTextStyles}`}>LocationFill</span>
          </span>
          <ArrowDown className='text-[#B4B4B4] size-5' />
        </span>
      </button>

      {/* Availability */}
      <button className={`${btnStyles}`}>
        <span className={`pe-4 border-e ${btnInnerStyles}`}>
          <span className='flex items-center gap-3'>
            <SuccessFill className='text-white size-6' />
            <span className={`${btnTextStyles}`}>Availability</span>
          </span>
          <ArrowDown className='text-[#B4B4B4] size-5' />
        </span>
      </button>

      {/* Date */}
      <button className={`rounded-e-full pe-18 ${btnStyles}`}>
        <span className={`pe-4 ${btnInnerStyles}`}>
          <span className='flex items-center gap-3'>
            <CalendarFill className='text-white size-6' />
            <span className={`${btnTextStyles}`}>Date</span>
          </span>
          <ArrowDown className='text-[#B4B4B4] size-5' />
        </span>
      </button>

      <IconBtn variant='primary' className='-translate-y-1/2 !absolute right-4 top-1/2 !p-5'>
        <MagnifyingGlass />
      </IconBtn>
    </div>
  );
};

export default HeroSearch;
