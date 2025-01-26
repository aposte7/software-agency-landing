import Circle from '../../components/Circle';
import Cross from '../../components/Cross';
import Form from './Form';

function ContactSection() {
  return (
    <section className='px-2 py-40 text-white'>
      <div className='flex items-center justify-between'>
        <div className='relative h-fit w-[30rem]'>
          <div className='space-y-6 pb-14'>
            <h2 className='text-3xl font-medium'>How Can We Help You?</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              eius officia libero asperiores nisi commodi numquam est laboriosam
              cum corrupti.
            </p>
          </div>
          <Circle
            height='8rem'
            width='8rem'
            styling='circle1 z-20 relative -left-6 bg-lighter-1 text-center text-5xl rounded-full'
          >
            <Cross
              styling='cross rotate-[65deg] z-10 h-[15rem] w-[5px] mb-[30px]'
              styling_after='after:absolute after after:w-[6.5rem] after:h-[6.5rem] after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
            ></Cross>
          </Circle>
          <Circle
            height='8rem'
            width='8rem'
            styling='circle1 z-20 relative -top-[2rem] left-[72%] bg-lighter-1 text-center text-5xl rounded-full'
          >
            <Cross
              styling='cross  rotate-[65deg] z-10 h-[15rem] w-[5px] mb-[30px]'
              styling_after='after:absolute after after:w-[6.5rem] after:h-[6.5rem] after:rounded-[50%] after:mb-[30px] after:bg-lighter-2 after:left-1/2 after:top-1/2'
            ></Cross>
          </Circle>
          <Cross styling='-rotate-[75deg] -z-10 top-[70%] z-10 h-[45rem] w-[5px] mb-[30px]'></Cross>
        </div>
        <div className='w-[35rem]'>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
