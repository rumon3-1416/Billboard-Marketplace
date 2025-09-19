import SearchBar from '@/components/common/SearchBar';

const Hero = () => {
  return (
    <section id='hero' className='relative h-[60vh] md:h-[70vh] lg:h-[90vh] xl:h-screen max-h-[728px] overflow-hidden'>
      {/* Bg Video */}
      <video
        width={1920}
        height={1080}
        className='absolute inset-0 -z-50 w-full h-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
      >
        <source src='/assets/videos/hero-bg.mp4' type='video/mp4' />
      </video>
      <div className='bg-black/50 absolute inset-0 -z-40 w-full h-full object-cover'></div>

      {/* Spacer of the Header */}
      <div className='w-full h-[106px]'></div>

      <div className='container h-[calc(100%-106px)] flex flex-col justify-center items-center'>
        <div className='max-w-[920px] mx-auto text-center'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-[1] font-semibold mb-[30px]'>
            Discover & Book Billboards in One Place
          </h1>
          <p className='text-[#EEEEEE] text-sm sm:text-base md:text-lg leading-[1.5] max-w-[540px] mx-auto'>
            Explore thousands of billboard locations, compare prices, and book your spot in minutes.
          </p>
        </div>

        {/* Searchbar */}
        <SearchBar className='mt-8 md:mt-11 lg:mt-[60px]' />

        <p className='text-white text-center text-lg mt-6 lg:mt-10'>
          Over{' '}
          <span className='text-lg font-medium bg-gradient-to-r from-[#7367F0] to-[#FF5DA3] bg-clip-text text-transparent'>
            5,200+
          </span>{' '}
          billboards booked today
        </p>
      </div>
    </section>
  );
};

export default Hero;
