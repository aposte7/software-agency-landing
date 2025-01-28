import Circle from '../../components/Circle';
import FadeInSection from '../../components/FadeInSection';

function ClientSection() {
  return (
    <FadeInSection>
      <section className='px-6 pb-40 pt-8 text-white'>
        <div className='space-y-4 pb-20'>
          <h2 className='text-3xl font-medium'>Our Popular Clients</h2>
          <p>See What our client company say about us</p>
        </div>

        <div className='flex h-[25rem] items-center gap-12'>
          <div className='about-box group relative h-full w-[23rem] overflow-x-hidden rounded-3xl bg-darker-3 p-12 transition-all duration-500 ease-in-out hover:w-[53rem]'>
            <Circle
              height='6.5rem'
              width='6.5rem'
              styling='circle1 
            bg-lighter-2 rounded-full absolute text-[2.8rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-x-[12rem]'
            >
              <ion-icon name='logo-github'></ion-icon>
            </Circle>

            <div className='absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 space-y-4 opacity-0 transition-all duration-700 ease-in-out group-hover:translate-x-[0rem] group-hover:opacity-100'>
              <h3 className='text-2xl font-medium'>Apple</h3>
              <p className='w-60'>It's Been Good Time Working With This Team</p>
            </div>
          </div>

          <div className='about-box group relative h-full w-[23rem] overflow-x-hidden rounded-3xl bg-darker-3 p-12 transition-all duration-500 ease-in-out hover:w-[53rem]'>
            <Circle
              height='6.5rem'
              width='6.5rem'
              styling='circle1 
            bg-lighter-2 rounded-full absolute text-[2.8rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-[80%]'
            >
              <ion-icon name='logo-apple'></ion-icon>
            </Circle>

            <div className='absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2 space-y-4 opacity-0 transition-all duration-700 ease-in-out group-hover:-translate-x-[90%] group-hover:opacity-100'>
              <h3 className='text-2xl font-medium'>Apple</h3>
              <p className='w-60'>It's Been Good Time Working With This Team</p>
            </div>
          </div>
          <div className='about-box group relative h-full w-[23rem] overflow-x-hidden rounded-3xl bg-darker-3 p-12 transition-all duration-500 ease-in-out hover:w-[53rem]'>
            <Circle
              height='6.5rem'
              width='6.5rem'
              styling='circle1 
            bg-lighter-2 rounded-full absolute text-[2.8rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:-translate-x-[12rem]'
            >
              <ion-icon name='logo-amazon'></ion-icon>
            </Circle>

            <div className='absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 space-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-[1rem] group-hover:opacity-100'>
              <h3 className='text-2xl font-medium'>Apple</h3>
              <p className='w-60'>It's Been Good Time Working With This Team</p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

export default ClientSection;
