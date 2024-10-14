import { SVGHeaderProps } from '@/components/icons';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

export interface LayoutMenu {
  href: string;
  icon:
    | (({ active, ...props }: SVGHeaderProps) => JSX.Element)
    | ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
}
