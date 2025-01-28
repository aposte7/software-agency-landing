import { useState } from 'react';
import OfferBox from '../../components/home/OfferBox';
import { OfferContent } from '../../components/home/OfferContent';
import FadeInSection from '../../components/FadeInSection';

const Tabs = [
  {
    id: 1,
    icon: 'diamond-outline',
    label: 'Digital Marketing',
    content:
      'Tab 1 Lorem ipsum, dolor sit amet consectetur adipisicing el inventore autem ipsum voluptates in voluptatem iure! Mollitiamolestias ipsa vel.',
  },
  {
    id: 2,
    icon: 'logo-css3',
    label: 'UI Design',
    content:
      'Tab 2 Lorem ipsum, dolor sit amet consectetur adipisicing el inventore autem ipsum voluptates in voluptatem iure! Mollitiamolestias ipsa vel.',
  },
  {
    id: 3,
    icon: 'logo-figma',
    label: 'UX Design',
    content:
      'Tab 3 Lorem ipsum, dolor sit amet consectetur adipisicing el inventore autem ipsum voluptates in voluptatem iure! Mollitiamolestias ipsa vel.',
  },
  {
    id: 4,
    icon: 'logo-python',
    label: 'Python',
    content:
      'Tab 4 Lorem ipsum, dolor sit amet consectetur adipisicing el inventore autem ipsum voluptates in voluptatem iure! Mollitiamolestias ipsa vel.',
  },
];

function OfferSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(false);

  const handleTabChange = (index) => {
    setAnimationKey(false); // Reset animation key
    setTimeout(() => {
      setActiveTabIndex(index); // Change the active tab
      setAnimationKey(true); // Trigger animation after content update
    }, 50); // Small delay to allow class change
  };

  return (
    <FadeInSection>
      <section className='px-6 pb-16 pt-32 text-white'>
        <div className='flex w-full items-center justify-between py-5'>
          <h2 className='text-[2rem] font-medium'>What We Offer</h2>

          <p className='w-[28rem]'>
            We Are UX Creative and Professional Designer And Make Sure We Good
            Price As Our Client Want it
          </p>
        </div>

        <div className='relative z-10 flex items-center justify-between pt-20'>
          {Tabs.map((value, index) => (
            <OfferBox
              key={value.id}
              active={activeTabIndex === index}
              label={value.label}
              handleOnClick={() => handleTabChange(index)}
            >
              <ion-icon name={value.icon}></ion-icon>
            </OfferBox>
          ))}
        </div>

        <div className={`relative top-16 z-10`}>
          <OfferContent
            styling={`${animationKey ? 'fade-in-animation' : ''}`}
            reverse={activeTabIndex % 2 === 0}
            label={Tabs[activeTabIndex].label}
          >
            <p className='text-[1.05rem]'>{Tabs[activeTabIndex].content}</p>
          </OfferContent>
        </div>
      </section>
    </FadeInSection>
  );
}

export default OfferSection;
