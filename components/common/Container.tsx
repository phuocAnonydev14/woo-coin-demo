import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export const Container = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn('w-[90dvw] md:w-[638px] overflow-hidden', props.className)}>
      {children}
    </div>
  );
};
