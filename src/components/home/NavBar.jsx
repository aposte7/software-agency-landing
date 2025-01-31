import { useState } from 'react';

function NavBar() {
  const [activeLink, setActiveLink] = useState('Home');

  // Calculate the position of the dot based on the active link
  const dotPosition = {
    Home: '12%',
    Services: '36%',
    Project: '62%',
    Contact: '87%',
  };

  return (
    <div className='flex w-full items-center justify-between px-6 py-4 text-cyan-50'>
      <a className='text-3xl font-semibold'>Logo</a>

      <nav className='navBar relative hidden w-[30rem] items-center justify-between rounded-full border border-solid border-white/10 bg-white/10 px-9 py-3 backdrop-blur-sm md:flex'>
        <a
          className={`relative ${
            activeLink === 'Home' ? 'text-white' : 'text-white/50'
          }`}
          onClick={() => setActiveLink('Home')}
        >
          Home
        </a>
        <a
          className={`relative ${
            activeLink === 'Services' ? 'text-white' : 'text-white/50'
          }`}
          onClick={() => setActiveLink('Services')}
        >
          Services
        </a>
        <a
          className={`relative ${
            activeLink === 'Project' ? 'text-white' : 'text-white/50'
          }`}
          onClick={() => setActiveLink('Project')}
        >
          Project
        </a>
        <a
          className={`relative ${
            activeLink === 'Contact' ? 'text-white' : 'text-white/50'
          }`}
          onClick={() => setActiveLink('Contact')}
        >
          Contact
        </a>

        {/* Single Dot */}
        <span
          className='absolute bottom-0 h-2 w-2 rounded-full bg-white/50 transition-all duration-300'
          style={{
            left: dotPosition[activeLink],
            transform: 'translateX(-50%)',
          }}
        ></span>
      </nav>

      <div className='hidden items-center gap-5 lg:flex'>
        <a>Sign up</a>
        <a className='rounded-md border border-stone-700/50 bg-slate-700/20 px-4 py-1 text-center'>
          Login
        </a>
      </div>
    </div>
  );
}

export default NavBar;
