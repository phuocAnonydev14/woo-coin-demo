import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export const Container = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('w-[90dvw] overflow-hidden md:w-[638px]', props.className)}>
      {children}
    </div>
  );
};
