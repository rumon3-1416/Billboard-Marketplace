'use client';

import { useTheme } from 'next-themes';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { ArrowLeft, ArrowRight } from '@/public/assets/icons/icons';
import Card from '@/components/common/Card';
import Button from '@/components/Button';
import IconBtn from '@/components/IconBtn';

const NewBillboards = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${
        theme === 'light' ? 'bg-[url(/assets/images/new-billboards-bg.png)]' : 'bg-[#262631]'
      } bg-no-repeat bg-cover bg-center py-8 sm:py-12 md:py-16 lg:py-20`}
    >
      <div className='container relative'>
        <h2 className='text-text text-center text-2xl sm:text-3xl md:text-5xl lg:text-[54px] leading-[1] font-medium mb-6 md:mb-8 lg:mb-10'>
          All New Billboards
        </h2>

        {/* Cards */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev'
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            880: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24
            }
          }}
          className='!pb-6 md:!pb-8 lg:!pb-10'
        >
          {[...Array(6)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <IconBtn className='swiper-btn-prev !hidden md:!inline-flex !absolute !left-0 min-[1350px]:!-left-4 !top-[60%] !-translate-y-1/2 !z-10'>
          <ArrowLeft />
        </IconBtn>
        <IconBtn className='swiper-btn-next !hidden md:!inline-flex !absolute !right-0 min-[1350px]:!-right-4 !top-[60%] !-translate-y-1/2 !z-10'>
          <ArrowRight />
        </IconBtn>

        <div className='flex justify-center'>
          <Button variant='contained'>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default NewBillboards;
