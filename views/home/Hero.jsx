import SearchBar from '@/components/searchBar.jsx';

const Hero = () => {
  return (
    <section id='hero' className='relative h-screen max-h-[844px] md:max-h-[728px] overflow-hidden'>
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
          <h1 className='text-white text-[42px] md:text-[56px] lg:text-[70px] leading-[1.05] font-medium md:font-semibold mb-5 md:mb-6 lg:mb-[30px]'>
            Discover & Book Billboards in One Place
          </h1>
          <p className='text-[#EEEEEE] text-sm sm:text-base md:text-lg leading-[1.5] max-w-[540px] mx-auto'>
            Explore thousands of billboard locations, compare prices, and book your spot in minutes.
          </p>
        </div>

        {/* Searchbar */}
        <SearchBar className='mt-10 md:mt-12 lg:mt-[60px]' />

        <p className='text-white text-center md:text-lg mt-[30px] mt-9 lg:mt-10'>
          Over{' '}
          <span className='md:text-lg font-medium bg-gradient-to-r from-[#7367F0] to-[#FF5DA3] bg-clip-text text-transparent'>
            5,200+
          </span>{' '}
          billboards booked today
        </p>
      </div>
    </section>
  );
};

export default Hero;
