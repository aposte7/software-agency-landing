import Circle from '../../components/Circle';
import Cross from '../../components/Cross';
import FadeInSection from '../../components/FadeInSection';
import Form from './Form';

function ContactSection() {
  return (
    <FadeInSection>
      <section className='px-2 py-40 text-white'>
        <div className='flex flex-col items-center justify-between 2md:flex-row'>
          <div className='relative h-fit w-[30rem]'>
            <div className='space-y-6 pb-14'>
              <h2 className='text-3xl font-medium'>How Can We Help You?</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                eius officia libero asperiores nisi commodi numquam est
                laboriosam cum corrupti.
              </p>
            </div>
            <Circle
              height='8rem'
              width='8rem'
              styling='circle1 z-20 relative  bg-lighter-1 text-center text-5xl rounded-full'
            >
              <Cross
                styling='rotate-[65deg] z-10 h-[15rem] w-[5px] mb-[30px]'
                styling_after='after:absolute after after:w-[6.5rem] after:h-[6.5rem] after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
              ></Cross>
            </Circle>
            <Circle
              height='8rem'
              width='8rem'
              styling='circle1 z-10 relative -top-[2rem] left-[72%] bg-lighter-1 text-center text-5xl rounded-full'
            >
              <Cross
                styling='rotate-[65deg] h-[15rem] w-[5px] mb-[30px]'
                styling_after='after:absolute after after:w-[6.5rem] 
              after:h-[6.5rem] after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
              ></Cross>
            </Circle>
            <Cross styling='-rotate-[75deg] top-[70%]  h-[45rem] w-[5px] mb-[30px]'></Cross>
          </div>
          <div className='w-fit 2md:w-[35rem]'>
            <Form />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default ContactSection;
