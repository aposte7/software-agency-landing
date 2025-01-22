import { AnimatedCard } from '../../components/home/AnimatedCard';
import { FeatureService } from '../../components/home/FeatureService';

function Hero() {
  return (
    <div className='xlg:pl-[5%] mt-8 grid grid-rows-2 overflow-hidden pl-[10%] pt-7 text-slate-50 md:grid-cols-2 md:grid-rows-1'>
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
          <FeatureService title='Cloud Data' style='max-w-[30rem] '>
            Our cloud data services ensure that your information is secure,
            accessible, and efficiently managed. We leverage the latest
            {/* technologies to provide robust and reliable cloud solutions tailored
            to your needs. */}
          </FeatureService>

          <FeatureService title='Fastest API' style='max-w-[30rem] '>
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

      <div className='relative left-[-17rem] top-24 m-auto h-[500px] w-full sm:left-[-15rem] md:left-[-20rem] lg:left-[-15rem] xl:left-[-5rem]'>
        <AnimatedCard style='card1 top-[-3rem]' />
        <AnimatedCard style='card2 top-[1rem]' />
        <AnimatedCard style='card3 top-[5rem]' />
      </div>
    </div>
  );
}

export default Hero;
2;
