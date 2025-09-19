'use client';

import { ReSparkle } from '@/public/assets/icons/icons';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const servicesAudience = [
  {
    title: 'Advertisers',
    description: 'Looking to reach real-world audiences with powerful, high-impact messaging'
  },
  {
    title: 'Billboard Owners',
    description: 'Looking to maximize your earnings with minimal hassle and greater exposure to the right audience.'
  },
  {
    title: 'Agencies & Marketers',
    description: 'who want tools that make campaign planning easier and more efficient'
  }
];

const WhoWeServe = () => {
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 ${mounted && (theme === 'dark' ? 'bg-[#262631]' : 'bg-dark')}`}
    >
      <div className='w-full flex justify-end'>
        <Image
          src='/assets/images/who-we-serve-banner.png'
          alt='img'
          width={720}
          height={582}
          className='w-full max-w-[720px] h-full aspect-auto object-cover'
        />
      </div>

      <div className='w-full flex justify-start'>
        <div className='w-full max-w-[668px] px-4 py-6 sm:px-[1.4rem] sm:py-10 md:px-[1.6rem] md:py-12 lg:p-[60px]'>
          <h2 className='text-white text-2xl md:text-4xl lg:text-[44px] leading-[1] mb-7 md:mb-10'>Who We Serve</h2>

          {servicesAudience.map((service, idx) => (
            <div
              key={idx}
              className={`flex gap-2 pe-6 pb-5 ${idx !== 0 && 'mt-[30px]'} ${
                idx + 1 < servicesAudience.length && 'border-b border-[#ffffff1f]'
              }`}
            >
              <span>
                <ReSparkle className='text-primary size-[18px]' />
              </span>
              <div>
                <p className='text-white text-lg font-medium leading-[1]'>{service.title}</p>
                <p className='text-[#B4B4B4] leading-[1.6] mt-4'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
