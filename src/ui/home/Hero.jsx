import { FeatureService } from '../../components/home/FeatureService';

function Hero() {
  return (
    <div className='mt-8 grid grid-cols-2 pl-[10%] pt-7 text-slate-50'>
      <div>
        {/* text 1 start*/}
        <div className='w-[30rem] text-left'>
          <h1 className='font- py-3 text-3xl font-semibold'>
            Digital Services With Excellent Quality
          </h1>

          <p className='py-3 text-base'>
            We offer top-notch digital services to meet your every need. From
            software development to web design, we ensure the highest standards
            of quality and innovation.
          </p>
          <div className='mt-6'>
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
        <div className='mt-16 flex items-start justify-between gap-[3%] py-5'>
          <FeatureService title='Cloud Data' style='w-[30rem] '>
            Our cloud data services ensure that your information is secure,
            accessible, and efficiently managed. We leverage the latest
            {/* technologies to provide robust and reliable cloud solutions tailored
            to your needs. */}
          </FeatureService>

          <FeatureService title='Fastest API' style='w-[30rem] '>
            Experience the speed and reliability of our API services. Designed
            for optimal performance, our APIs enable seamless integration and
            {/* fast data retrieval, helping you build powerful and responsive
            applications. */}
          </FeatureService>
        </div>
        {/* text 2 end*/}
      </div>
      {/**Column 1 End */}

      {/**Column 2 start*/}
      <div>
        <div>
          <div>card 1</div>
          <div>card 2</div>
          <div>card 3</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
