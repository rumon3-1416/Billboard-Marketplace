import SectionTitlePill from '@/components/common/SectionTitlePill';
import { Sparkle } from '@/public/assets/icons/icons';

const OurMission = () => {
  return (
    <section className='bg-bg py-10 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]'>
      <div className='container'>
        <div className='text-center px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
          <SectionTitlePill Icon={<Sparkle className='text-primary' />} className='mx-auto'>
            Our Mission
          </SectionTitlePill>

          <p className='text-text text-lg sm:text-xl md:text-3xl lg:text-4xl leading-[1.25] capitalize mt-6'>
            At Billboard, our mission is to <span className='text-text-secondary'>transform how billboards</span> are
            managed, booked, and monetized using smart, data-driven tools to make{' '}
            <span className='text-text-secondary'>outdoor advertising easier</span>, faster, and more effective for
            owners and advertisers alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
