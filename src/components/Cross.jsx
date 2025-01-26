function Cross({
  children,
  styling_after = '',
  styling_before = '',
  styling = '',
}) {
  return (
    <div
      className={`cross absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-lighter-2 after:-translate-x-1/2 after:-translate-y-1/2 ${styling_after} ${styling_before} ${styling}`}
    >
      {children}
    </div>
  );
}

export default Cross;
