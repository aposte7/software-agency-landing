import Circle from '../../components/Circle';
import { AnimatedCard } from '../../components/home/AnimatedCard';
import { FeatureService } from '../../components/home/FeatureService';

function Hero() {
  return (
    <div className='mx-auto grid max-w-[78rem] grid-rows-2 px-6 pt-7 text-slate-50 md:grid-cols-2 md:grid-rows-1'>
      {/* <div className='overlay absolute left-[80%] top-[40%] h-[700px] w-[700px] -translate-x-[60%] -translate-y-1/2 rounded-full after:absolute after:left-1/3 after:top-1/3 after:h-[100px] after:w-[100px] after:translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-lighter-2'></div> */}
      <div className='overlay after:translate-1/2 absolute left-[75%] top-[0] h-[700px] w-[700px] -translate-x-1/2 rounded-full after:absolute after:left-1/3 after:top-1/3 after:h-[100px] after:w-[100px] after:rounded-full after:bg-lighter-2'></div>

      <div>
        {/* text 1 start*/}
        <div className='w-[30rem] space-y-4 text-left'>
          <h1 className='py-2 text-3xl font-semibold'>
            Digital Services With Excellent Quality
          </h1>

          <p className='text-base'>
            We offer top-notch digital services to meet your every need. From
            software development to web design, we ensure the highest standards
            of quality and innovation.
          </p>
          <div className='pt-5'>
            <a
              className='linkBtn max-w-fit rounded px-6 py-2 text-base'
              href=''
            >
              Get Started
            </a>
          </div>
        </div>
        {/* text 1 end*/}

        {/* text 2 start*/}
        <div className='mt-16 flex flex-col items-start justify-between gap-[3%] py-5 sm:flex-row sm:space-x-16'>
          <FeatureService
            title='Cloud Data'
            style='max-w-[30rem] '
            icon={<ion-icon name='cloud-done-outline'></ion-icon>}
          >
            Our cloud data services ensure that your information is secure,
            accessible, and efficiently managed. We leverage the latest
            {/* technologies to provide robust and reliable cloud solutions tailored
            to your needs. */}
          </FeatureService>

          <FeatureService
            title='Fastest API'
            style='max-w-[30rem]'
            icon={<ion-icon name='analytics-outline'></ion-icon>}
          >
            Experience the speed and reliability of our API services. Designed
            for optimal performance, our APIs enable seamless integration and
            {/* fast data retrieval, helping you build powerful and responsive
            applications. */}
          </FeatureService>
        </div>
        {/* text 2 end*/}
      </div>
      {/**Column 1 End */}

      {/**Column 2 start
       */}

      <div className='self-center'>
        <div className='relative right-20 h-[500px]'>
          <AnimatedCard styling='card card3 absolute top-[-3rem]' />
          <AnimatedCard styling='card card2 absolute top-[1rem]' />
          <AnimatedCard styling='card card1 absolute top-[5rem]' />

          <Circle styling='circle1 rounded-full absolute -top-20 left-52 ' />
          <Circle
            height='5rem'
            width='5rem'
            styling='circle1 rounded-full absolute bottom-24 -right-20'
          />
          <Circle
            height='2rem'
            width='2rem'
            styling='circle2 absolute rounded-full bottom-0 left-80'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
2;
