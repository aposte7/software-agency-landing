import AboutSection from '../ui/home/AboutSection';
import Header from '../ui/Home/Header';
import OfferSection from '../ui/home/OfferSection';

function HomePage() {
  return (
    <div className='mx-auto max-w-[78rem]'>
      <Header />
      <OfferSection />
      <AboutSection />
    </div>
  );
}

export default HomePage;
