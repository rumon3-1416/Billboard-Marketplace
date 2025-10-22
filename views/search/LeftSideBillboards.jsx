import Card from '@/components/common/Card';

const LeftSideBillboards = () => {
  return (
    <div className='w-full h-full overflow-y-auto [scrollbar-width:thin] py-6 ps-6 pe-3 space-y-6'>
      {[...Array(10)].map((_, idx) => (
        <Card key={idx} />
      ))}
    </div>
  );
};

export default LeftSideBillboards;
