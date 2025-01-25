import NavBar from '../../components/Home/NavBar';
import Hero from './Hero';

function Header() {
  return (
    <div className='relative overflow-x-hidden'>
      <NavBar />
      <Hero />
    </div>
  );
}

export default Header;
