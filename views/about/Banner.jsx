const Banner = () => {
  return (
    <section className='relative h-[60vh] md:h-[70vh] lg:h-[90vh] xl:h-screen max-h-[592px] overflow-hidden'>
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
      <div className='absolute inset-0 -z-40 w-full h-full bg-black/50'></div>

      <div className='container h-full py-8 sm:py-10 md:py-12 lg:py-[60px] flex items-end'>
        <div className='grid grid-cols-1 lg:grid-cols-[524px_auto] xl:grid-cols-[660px_auto] items-end gap-16 lg:gap-20 xl:gap-24'>
          <h1 className='text-white text-5xl lg:text-7xl xl:text-[90px] leading-[1] font-semibold'>About Billboard</h1>
          <p className='w-full text-white font-medium leading-[1.6]'>
            Welcome to Billboard, the modern way to buy and sell billboard space. We’re building a platform where
            advertisers and billboard owners connect seamlessly removing outdated processes and replacing them with
            transparency, efficiency, and opportunity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
