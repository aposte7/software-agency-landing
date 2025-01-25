import Cross from '../Cross';

export function AnimatedCard({
  height = 'h-[16rem]',
  width = 'w-[8rem]',
  styling,
  anime = true,
}) {
  return (
    <div className={` ${height} ${width} ${styling}`}>
      {anime && (
        <Cross
          styling='cross-anime h-full w-[5px] opacity-0 mb-[30px]'
          styling_after='after:absolute [30px] after after:w-6 after:h-6 after:rounded-[5rem] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
          styling_before='before:w-[125px]  before:h-[5px]  before:rounded-[50%]  before:mb-[30px]  before:bg-lighter-2  before:left-1/2 before:top-1/2  before before:absolute  before:-translate-x-1/2 before:-translate-y-1/2  '
        />
      )}
    </div>
  );
}
