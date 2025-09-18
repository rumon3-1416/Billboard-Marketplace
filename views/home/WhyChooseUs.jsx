'use client';

import Image from 'next/image';

const WhyChooseUs = () => {
  const Overview = ({ index }) => (
    <>
      {index !== 0 && <div className='hidden md:block h-[147px] w-[1px] bg-border'></div>}

      <div className='flex-1 px-4 text-center flex flex-col items-center'>
        <h2 className='text-text text-2xl sm:text-3xl md:text-5xl lg:text-[54px] leading-[1] font-medium'>95%</h2>
        <p className='text-text text-lg md:text-xl lg:text-2xl mt-6 md:mt-[30px] mb-4 md:mb-5'>Smart Advertising</p>
        <p className='text-sm md:text-base text-text-secondary leading-[1.5] max-w-[360px] mx-auto'>
          Billboard ads drive higher brand recall and create long-lasting impressions.
        </p>
      </div>
    </>
  );

  return (
    <section
      className={`bg-[url(/assets/images/why-choose-bg.png)] bg-no-repeat bg-cover bg-center py-8 sm:py-12 md:py-16 lg:py-20`}
    >
      <div className='container'>
        <h2 className='text-text max-w-[755px] text-center mx-auto text-2xl sm:text-3xl md:text-5xl lg:text-[54px] leading-[1] font-medium mb-5 md:mb-7'>
          Your Space to Find, Choose, and Advertise
        </h2>
        <p className='text-text-secondary max-w-[535px] mx-auto text-center leading-[1.6] mb-6 md:mb-8 lg:mb-10'>
          We connect you with the best billboard spaces across the city easy to browse, compare, and book.
        </p>

        <Image
          src='/assets/images/why-choose-us.png'
          alt='img'
          width={1280}
          height={600}
          className='w-full aspect-[4/3] sm:aspect-[5/3] md:aspect-video lg:aspect-[19/9] max-h-[564px] object-cover object-top'
        />

        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-6'>
          {[...Array(3)].map((_, idx) => (
            <Overview key={idx} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
