function OfferBox({ children, styling }) {
  return (
    <div
      className={`active-offer relative h-[13rem] w-[12.5rem] space-y-9 rounded-xl border border-white/50 p-8 text-center ${styling ?? ''}`}
    >
      {children}
    </div>
  );
}

export default OfferBox;
