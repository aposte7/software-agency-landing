import Circle from '../../components/Circle';
import FadeInSection from '../../components/FadeInSection';
import { AnimatedCard } from '../../components/home/AnimatedCard';
import { FeaturedService } from '../../components/home/FeaturedService';
import LinkButton from '../../components/LinkButton';

function Hero() {
  return (
    <div className='grid grid-cols-1 grid-rows-2 px-6 pt-14 text-slate-50 md:grid-rows-1 2md:grid-cols-[30rem,1fr]'>
      <div className='overlay absolute left-[88%] top-[2rem] h-[700px] w-[700px] -translate-x-1/2 rounded-full after:absolute after:left-1/2 after:top-1/2 after:h-32 after:w-32 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-lighter-2'></div>

      <FadeInSection>
        {/* text start*/}
        <div className='max-w-[30rem] space-y-4 text-left'>
          <h1 className='py-2 text-3xl font-semibold'>
            Digital Services With Excellent Quality
          </h1>

          <p className='text-base'>
            We offer top-notch digital services to meet your every need. From
            software development to web design, we ensure the highest standards
            of quality and innovation.
          </p>
          <div className='pt-5'>
            <LinkButton>Get start</LinkButton>
          </div>
        </div>

        <div className='mt-16 flex items-start justify-between gap-[3%] py-5 sm:space-x-16'>
          <FeaturedService
            title='Cloud Data'
            style='max-w-[30rem] '
            icon={<ion-icon name='cloud-done-outline'></ion-icon>}
          >
            Our cloud data services ensure that your information is secure,
            accessible, and efficiently managed. We leverage the latest
            {/* technologies to provide robust and reliable cloud solutions tailored
            to your needs. */}
          </FeaturedService>

          <FeaturedService
            title='Fastest API'
            style='max-w-[30rem]'
            icon={<ion-icon name='analytics-outline'></ion-icon>}
          >
            Experience the speed and reliability of our API services. Designed
            for optimal performance, our APIs enable seamless integration and
            {/* fast data retrieval, helping you build powerful and responsive
            applications. */}
          </FeaturedService>
        </div>

        {/* text end*/}
      </FadeInSection>
      {/**Column 1 End */}

      {/**Column 2 start */}

      {/**Column 2 start */}
      {/**Column 2 start */}
      <div className='self-center'>
        <div className='relative -left-[16rem] top-[10rem] h-[500px] md:-left-[9rem] 2md:-left-[20rem] 2md:top-[0] lg:-left-[15rem] 2lg:-left-[10rem] xl:left-[1rem]'>
          <AnimatedCard styling='card card3 absolute top-[-3rem] left-0' />
          <AnimatedCard styling='card card2 absolute top-[1rem] left-0' />
          <AnimatedCard styling='card card1 absolute top-[5rem]' />
          <Circle styling='circle1 rounded-full absolute -top-28 left-52' />
          <Circle
            height='5rem'
            width='5rem'
            styling='circle1 rounded-full absolute 2md:bottom-24 bottom-44 -right-8 2md:-right-4'
          />
          <Circle
            height='2rem'
            width='2rem'
            styling='circle2 absolute rounded-full bottom-14 2md:bottom-4 left-72'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
2;
