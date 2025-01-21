function NavBar() {
  return (
    <div className='mx-auto flex w-full max-w-[78rem] items-center justify-between px-6 py-4 text-cyan-50'>
      <a className='text-3xl font-semibold'>Logo-her</a>

      <nav className='navBar flex w-[30rem] items-center justify-between rounded-full border border-solid border-white/10 bg-white/10 px-9 py-3 backdrop-blur-sm'>
        <a className='relative after:absolute after:left-2/4 after:top-7 after:h-2 after:w-2 after:translate-x-[-50%] after:rounded-full after:bg-white/50'>
          Home
        </a>
        <a>Services</a>
        <a>Project</a>
        <a>Contact</a>
      </nav>
      <div className='flex items-center gap-5'>
        <a>Sign up</a>
        <a className='rounded-md border border-stone-700/50 bg-slate-700/20 px-4 py-1 text-center'>
          Login
        </a>
      </div>
    </div>
  );
}

export default NavBar;
