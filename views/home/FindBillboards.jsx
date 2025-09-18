import Card from '@/components/common/Card';
import Button from '@/components/Button';
import IconBtn from '@/components/IconBtn';
import { ArrowLeft, ArrowRight } from '@/public/assets/icons/icons';

const FindBillboards = () => {
  return (
    <section className='bg-bg py-10 sm:py-16 md:py-20 lg:py-24 xl:py-[120px]'>
      <div className='container'>
        <div className='flex justify-between items-center mb-6 md:mb-8 lg:mb-10'>
          <h2 className='text-text text-2xl sm:text-3xl md:text-5xl lg:text-[54px] leading-[1] font-medium'>
            Find Billboards in Your Area
          </h2>

          <div className='flex items-center gap-3'>
            <IconBtn>
              <ArrowLeft />
            </IconBtn>
            <IconBtn>
              <ArrowRight />
            </IconBtn>
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(6)].map((_, idx) => (
            <Card key={idx} />
          ))}
        </div>

        <div className='flex justify-center mt-6 md:mt-8 lg:mt-10'>
          <Button variant='contained'>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default FindBillboards;
