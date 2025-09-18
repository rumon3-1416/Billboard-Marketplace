const Vision = () => {
  return (
    <section className='bg-bg pt-10 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 xl:pt-[120px]'>
      <div className='container'>
        <h1 className='text-text text-center max-w-[780px] mx-auto text-2xl sm:text-3xl md:text-4xl lg:tex-[44px] leading-[1.2] font-medium mb-8 md:mb-10'>
          Empowering the Future Through Innovation, Connection and Purpose
        </h1>

        <div className='w-full border border-dark-border rounded-2xl'>
          <div className='w-full h-[420px] md:h-[604px] bg-[linear-gradient(to_bottom,#16162400,#161624),url(/assets/images/our-vision-bg.png)] bg-no-repeat bg-cover bg-center flex flex-col justify-end rounded-2xl'>
            <div className='p-6 md:p-8 lg:p-10'>
              <span>
                <svg
                  width='64'
                  height='64'
                  viewBox='0 0 64 64'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-12 lg:size-16'
                >
                  <path d='M18.6654 18.6666L31.9987 5.33325H45.332V18.6666H18.6654Z' fill='white' />
                  <path d='M18.6654 45.3332V18.6666H5.33203V31.9999L18.6654 45.3332Z' fill='white' />
                  <path d='M45.332 45.3332V18.6666L58.6654 31.9999V45.3332H45.332Z' fill='white' />
                  <path d='M45.332 45.3332H18.6654V58.6666H31.9987L45.332 45.3332Z' fill='white' />
                </svg>
              </span>

              <p className='text-white text-sm sm:text-base md:text-lg lg:text-[22px] font-medium leading-[1.45] mt-[30px]'>
                Delivering impactful billboard campaigns with the perfect blend of reach, efficiency, and measurable
                results. The gently curved lines accentuated by sewn details are kind to your body and pleasant to look
                at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
