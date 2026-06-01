import { cn } from '../../utils/cn';

const Section = ({ 
  children, 
  className, 
  id, 
  background = 'white',
  padding = 'large'
}) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-secondary-50',
    dark: 'bg-secondary-900 text-white',
    primary: 'bg-primary-600 text-white',
  };

  const paddings = {
    none: 'py-0',
    small: 'py-8 md:py-12',
    medium: 'py-12 md:py-16',
    large: 'py-16 md:py-24',
    xlarge: 'py-24 md:py-32',
  };

  return (
    <section 
      id={id} 
      className={cn('w-full', backgrounds[background], paddings[padding], className)}
    >
      {children}
    </section>
  );
};

export default Section;
