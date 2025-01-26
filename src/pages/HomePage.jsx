import AboutSection from '../ui/home/AboutSection';
import ClientSection from '../ui/home/ClientSection';
import ContactSection from '../ui/home/ContactSection';
import Header from '../ui/Home/Header';
import OfferSection from '../ui/home/OfferSection';
import ProjectSection from '../ui/home/ProjectSection';

function HomePage() {
  return (
    <div className='mx-auto max-w-[78rem]'>
      <Header />
      <OfferSection />
      <AboutSection />
      <ProjectSection />
      <ClientSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
