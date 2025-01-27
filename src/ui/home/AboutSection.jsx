import Circle from '../../components/Circle';
import Cross from '../../components/Cross';
import LinkButton from '../../components/LinkButton';

function AboutSection() {
  return (
    <section className='mt-5 w-full px-6 pt-64 text-white'>
      <div className='grid h-[52rem] grid-cols-12 grid-rows-12 pb-20'>
        <div className='col-span-4 row-span-4 space-y-7'>
          <h2 className='text-3xl font-medium'>Why WE ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            officia modi blanditiis aliquid nemo voluptatibus perferendis ab
            distinctio, esse dicta?
          </p>

          <div className='flex gap-14'>
            <LinkButton>Hire Us</LinkButton>
            <LinkButton> Learn More</LinkButton>
          </div>
        </div>

        <div className='about-box col-span-full col-start-6 row-span-8 row-start-1 box-border h-[28rem] w-[40rem] items-center justify-self-end rounded-xl bg-darker-2'>
          <div className='relative flex h-full items-center justify-between px-12'>
            <div className='space-y-6'>
              <Circle styling='circle1 relative   text-center text-5xl rounded-full'>
                <Cross
                  styling='cross z-10 h-[9rem] w-[5px] mb-[30px]'
                  styling_after='after:absolute [30px] after after:w-16 after:h-16 after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
                  styling_before='before:w-[125px]  before:h-[5px]  before:rounded-[50%]  before:mb-[30px]  before:bg-lighter-2  before:left-1/2 before:top-1/2  before before:absolute  before:-translate-x-1/2 before:-translate-y-1/2  '
                >
                  <ion-icon name='people-outline'></ion-icon>
                </Cross>
              </Circle>
              <p className='mx-auto max-w-20 text-center'>Olman Gemechu</p>
            </div>
            <div className='space-y-6'>
              <Circle styling='circle1 relative   text-center text-5xl rounded-full'>
                <Cross
                  styling='cross z-10 h-[9rem] w-[5px] mb-[30px]'
                  styling_after='after:absolute [30px] after after:w-16 after:h-16 after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
                  styling_before='before:w-[125px]  before:h-[5px]  before:rounded-[50%]  before:mb-[30px]  before:bg-lighter-2  before:left-1/2 before:top-1/2  before before:absolute  before:-translate-x-1/2 before:-translate-y-1/2  '
                >
                  <ion-icon name='people-outline'></ion-icon>
                </Cross>
              </Circle>
              <p className='mx-auto max-w-20 text-center'>Olman Gemechu</p>
            </div>
            <div className='space-y-6'>
              <Circle styling='circle1 relative   text-center text-5xl rounded-full'>
                <Cross
                  styling='cross z-10 h-[9rem] w-[5px] mb-[30px]'
                  styling_after='after:absolute [30px] after after:w-16 after:h-16 after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
                  styling_before='before:w-[125px]  before:h-[5px]  before:rounded-[50%]  before:mb-[30px]  before:bg-lighter-2  before:left-1/2 before:top-1/2  before before:absolute  before:-translate-x-1/2 before:-translate-y-1/2  '
                >
                  <ion-icon name='people-outline'></ion-icon>
                </Cross>
              </Circle>
              <p className='mx-auto max-w-20 text-center'>Olman Gemechu</p>
            </div>
          </div>
        </div>

        <div className='about-box col-span-7 col-start-1 row-span-full row-start-6 h-[26rem] w-[42rem] rounded-xl bg-darker-3'>
          <div className='relative grid h-full w-full grid-cols-2 items-center justify-items-center'>
            <div className='space-y-4'>
              <p className='text-3xl font-semibold'>10</p>
              <p className='text-lg font-medium'>Marks</p>
            </div>
            <div className='space-y-4'>
              <p className='text-3xl font-semibold'>10</p>
              <p className='text-lg font-medium'>Marks</p>
            </div>
            <div className='space-y-4'>
              <p className='text-3xl font-semibold'>10</p>
              <p className='text-lg font-medium'>Marks</p>
            </div>
            <div className='space-y-4'>
              <p className='text-3xl font-semibold'>10</p>
              <p className='text-lg font-medium'>Marks</p>
            </div>

            <Cross
              styling='cross z-10 h-[15rem] w-[5px] mb-[30px]'
              styling_after='after:absolute [30px] after after:w-8 after:h-8 after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
              styling_before='before:w-[25rem]  before:h-[5px]  before:rounded-[50%]  before:mb-[30px]  before:bg-lighter-2  before:left-1/2 before:top-1/2  before before:absolute  before:-translate-x-1/2 before:-translate-y-1/2  '
            ></Cross>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
