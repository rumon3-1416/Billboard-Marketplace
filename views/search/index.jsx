import Card from '@/components/common/Card';

const Search = () => {
  return (
    <div className='flex w-full h-[calc(100vh-106px)] mb-8 md:mb-12 lg:mb-[60px]'>
      <div className='w-[360px] h-full overflow-y-auto py-6 ps-6 pe-3 space-y-6'>
        {[...Array(10)].map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>

      {/* Map */}
      <div className='flex-1 w-full h-full flex justify-center items-center text-text text-3xl font-semibold border border-border'>
        Map
      </div>
    </div>
  );
};

export default Search;
