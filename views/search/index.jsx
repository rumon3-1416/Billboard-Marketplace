'use client';

import Card from '@/components/common/Card';
import LeftSideBillboards from './LeftSideBillboards';

const Search = () => {
  return (
    <div className='flex w-full h-[calc(100vh-106px)] mb-8 md:mb-12 lg:mb-[60px]'>
      <div className='w-[360px]'>
        <LeftSideBillboards />
      </div>

      {/* Map */}
      <div className='flex-1 w-full h-full flex justify-center items-center text-text text-3xl font-semibold border border-border'>
        Map
      </div>
    </div>
  );
};

export default Search;
