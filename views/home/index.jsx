import FeaturedBillboards from './FeaturedBillboards';
import FindBillboards from './FindBillboards';
import Hero from './Hero';
import WhyChooseUs from './WhyChooseUs';
import NewBillboards from './NewBillboards';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedBillboards />
      <NewBillboards />
      <FindBillboards />
      <WhyChooseUs />
    </>
  );
};

export default Home;
