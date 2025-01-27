function LinkButton({ children }) {
  return (
    <a
      className='linkBtn max-w-fit rounded-md px-6 py-[.38rem] text-[1rem]'
      href=''
    >
      {children}
    </a>
  );
}

export default LinkButton;
