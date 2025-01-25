import Circle from '../Circle';

export function FeatureService({ title, icon, children, style }) {
  return (
    <div className={`space-y-4 ${style}`}>
      <Circle height='5.5rem' width='5.5rem' styling='circle1 rounded-full'>
        <div className='relative block h-full w-full text-center text-[2.7rem]'>
          {icon}
        </div>
      </Circle>

      <h2 className='textGlow py-3 text-3xl font-medium'>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
