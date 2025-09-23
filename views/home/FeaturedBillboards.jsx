import Card from '@/components/common/Card';
import IconBtn from '@/components/IconBtn';
import { ArrowLeft, ArrowRight } from '@/public/assets/icons/icons';

const FeaturedBillboards = () => {
  return (
    <section className='bg-bg py-10 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]'>
      <div className='container'>
        <div className='flex justify-between items-center gap-4 mb-6 md:mb-8 lg:mb-10'>
          <h2 className='text-text text-2xl sm:text-3xl md:text-5xl lg:text-[54px] leading-[1] font-medium'>
            Featured Billboards
          </h2>

          <div className='flex items-center gap-3'>
            <IconBtn>
              <ArrowLeft className='size-5 md:size-6' />
            </IconBtn>
            <IconBtn>
              <ArrowRight className='size-5 md:size-6' />
            </IconBtn>
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(6)].map((_, idx) => (
            <Card key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBillboards;
