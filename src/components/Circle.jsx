function Circle({
  styling = '',
  children,
  height = '6rem',
  width = '6rem',
  style = {},
}) {
  return (
    <div className={`${styling}`} style={{ height, width, ...style }}>
      {children}
    </div>
  );
}

export default Circle;
