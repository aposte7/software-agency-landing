export function AnimatedCard({
  height = 'h-[16rem]',
  width = 'w-[8rem]',
  styling,
  anime = true,
}) {
  return (
    <div className={` ${height} ${width} ${styling}`}>
      {anime && <div className='card-animation'></div>}
    </div>
  );
}
