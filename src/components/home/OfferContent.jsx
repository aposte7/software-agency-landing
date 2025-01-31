import LinkButton from '../LinkButton';
import { AnimatedCard } from './AnimatedCard';

export function OfferContent({
  reverse = false,
  label = '',
  children,
  styling = '',
}) {
  return (
    <div
      className={`${styling} ${reverse && 'flex-row-reverse'} offer-detail-square flex h-[37rem] w-full flex-col items-center justify-between rounded-xl bg-darker-4 px-12 py-12 2md:flex-row`}
    >
      <div className='max-w-[500px] space-y-6'>
        <h3 className='text-3xl font-medium'>{label} </h3>

        {children}
        <div className='flex items-center gap-12'>
          <LinkButton>Hire teams </LinkButton>
          <LinkButton>Learn more </LinkButton>
        </div>
      </div>

      <div
        className={`relative ${reverse ? '-left-[7rem] 2lg:-left-[3.5rem]' : '-left-[5rem] 2md:-left-[7rem] xl:-left-[12rem]'} h-[300px] w-[400px]`}
      >
        <AnimatedCard
          anime={false}
          styling='offer-card offer-card-1 absolute top-1/2 left-1/2 z-30  '
        ></AnimatedCard>
        <AnimatedCard
          anime={false}
          styling='offer-card offer-card-2 absolute top-1/2 left-1/2 z-20'
        ></AnimatedCard>
        <AnimatedCard
          anime={false}
          styling='offer-card offer-card-3 absolute top-1/2 left-1/2  '
        ></AnimatedCard>
      </div>
    </div>
  );
}
