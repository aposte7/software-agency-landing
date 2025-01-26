import Circle from '../../components/Circle';

function ProjectSection() {
  return (
    <section className='px-6 py-14 text-white'>
      <div className='space-y-4 py-20'>
        <h2 className='text-3xl font-semibold'>Our Project</h2>
        <p>See Our Projects What We Made Feel Deep With Us</p>
      </div>

      <div className='grid h-[550px] grid-cols-[15rem_1fr] gap-24'>
        <div className='self-center py-7'>
          <div className='relative flex h-[22rem] flex-col justify-between'>
            <div className='z-10 text-3xl'>Figma</div>
            <div className='z-10 text-3xl'>Wordpress</div>
            <div className='z-10 text-3xl'>CSS</div>
            <div className='z-10 text-3xl'>Python</div>
            <div className='z-10 text-3xl'>Javascript</div>
            <Circle
              styling='project-square absolute top-0 z-10 -left-16 rounded-xl'
              height='2.3rem'
              width='2.3rem'
            />
            <div className='square-menu-line'></div>
          </div>
        </div>
        <div className='py-2'>
          <h2 className='mx-auto w-20 pb-10 text-5xl font-semibold'>Figma</h2>

          <div className='flex items-center justify-between'>
            <div className='h-[26rem] w-72 bg-gray-950'>
              <img
                className='object-contain'
                src='images/figma-project.PNG'
                alt=''
              />
            </div>

            <p className='w-52 text-[1.65rem]'>
              Product Design With Good Animation{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
