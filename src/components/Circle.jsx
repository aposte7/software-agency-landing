function Circle({ styling = '', children, height = '6rem', width = '6rem' }) {
  return (
    <div className={` ${styling}`} style={{ height, width }}>
      {children}
    </div>
  );
}

export default Circle;
