import Circle from '../Circle';

export function FeatureService({ title, children, style }) {
  return (
    <div className={`space-y-4 ${style}`}>
      <Circle></Circle>
      <h2 className='textGlow py-3 text-3xl font-medium'>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
