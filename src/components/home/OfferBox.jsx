import Circle from '../Circle';

function OfferBox({
  children,
  handleOnClick = () => {},
  active = false,
  label = '',
  styling = '',
}) {
  return (
    <div
      onClick={handleOnClick}
      className={`${active && 'active-offer'} relative h-[13rem] w-[11.5rem] cursor-pointer space-y-9 rounded-xl border border-white/50 bg-darker-4/90 p-8 text-center hover:bg-darker-4 2md:w-[12.5rem] ${styling}`}
    >
      <Circle
        height='3.5rem'
        width='3.5rem'
        styling='offer-square mx-auto rounded-lg text-center text-[2.5rem]'
      >
        {children}
      </Circle>
      <p className='font-semibold'>{label}</p>
      <div
        className={` ${active && 'offer-box-line'} absolute left-1/2 top-1/4 -z-10 hidden h-40 w-32 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-lighter-1 opacity-0 2md:block`}
      ></div>
    </div>
  );
}

export default OfferBox;
