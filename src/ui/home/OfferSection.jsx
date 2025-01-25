import Circle from '../../components/Circle';
import { AnimatedCard } from '../../components/home/AnimatedCard';
import OfferBox from '../../components/home/OfferBox';

function OfferSection() {
  return (
    <section className='px-6 pb-16 pt-32 text-white'>
      <div className='flex w-full items-center justify-between py-5'>
        <h2 className='text-[2rem] font-medium'>What We Offer</h2>

        <p className='w-[28rem]'>
          We Are UX Creative and Professinoal Desginer And Make Sure We Good
          Price As Our Client Want it
        </p>
      </div>

      <div className='relative z-10 flex items-center justify-between pt-20'>
        <OfferBox styling=''>
          <Circle
            height='3.5rem'
            width='3.5rem'
            styling='offer-square mx-auto rounded-lg text-center text-[2.5rem]'
          >
            <ion-icon name='diamond-outline'></ion-icon>
          </Circle>
          <p className='font-semibold'>Digital Marketing</p>
          <div className='offer-box-line absolute left-1/2 top-1/4 -z-10 h-40 w-32 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-lighter-1 opacity-0'></div>
        </OfferBox>

        <OfferBox>
          <Circle
            height='3.5rem'
            width='3.5rem'
            styling='offer-square mx-auto rounded-lg text-center text-[2.5rem]'
          >
            <ion-icon name='logo-css3'></ion-icon>
          </Circle>
          <p className='font-semibold'> UX Design</p>
          <div className='offer-box-line absolute left-1/2 top-1/4 -z-10 h-40 w-32 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-lighter-1 opacity-0'></div>
        </OfferBox>

        <OfferBox>
          <Circle
            height='3.5rem'
            width='3.5rem'
            styling='offer-square mx-auto rounded-lg text-center text-[2.5rem]'
          >
            <ion-icon name='logo-figma'></ion-icon>
          </Circle>
          <p className='font-semibold'> UI Design</p>

          <div className='offer-box-line absolute left-1/2 top-1/4 -z-10 h-40 w-32 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-lighter-1 opacity-0'></div>
        </OfferBox>

        <OfferBox>
          <Circle
            height='3.5rem'
            width='3.5rem'
            styling='offer-square mx-auto rounded-lg text-center text-[2.5rem]'
          >
            <ion-icon name='logo-python'></ion-icon>
          </Circle>

          <p className='font-semibold'>Python APp</p>
          <div className='offer-box-line absolute left-1/2 top-1/4 -z-10 h-40 w-32 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-lighter-1 opacity-0'></div>
        </OfferBox>
      </div>

      {/* Detail discription of the offers */}
      <div className='relative top-16 z-10 bg-darker-4'>
        <div className='offer-detail-square flex h-[37rem] w-full items-center justify-between rounded-xl px-12 py-12'>
          <div className='max-w-[500px] space-y-6'>
            <h3 className='text-3xl font-medium'>Digital Marketing </h3>
            <p className='text-[1.05rem]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              inventore autem ipsum voluptates in voluptatem iure! Mollitia
              molestias ipsa vel.
            </p>
            <div className='left- flex items-center gap-4'></div>
          </div>

          <div className='relative h-[300px] w-[300px]'>
            <AnimatedCard
              anime={false}
              styling='offer-card offer-card-1 top-[26%] left-[-16%] z-30  absolute'
            >
              OLman
            </AnimatedCard>
            <AnimatedCard
              anime={false}
              styling='offer-card offer-card-2 absolute  z-20'
            >
              OLman
            </AnimatedCard>
            <AnimatedCard
              anime={false}
              styling='offer-card offer-card-3 absolute '
            >
              OLman
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
