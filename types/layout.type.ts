import { SVGHeaderProps } from '@/components/icons';

export interface HeaderMenu {
  href: string;
  icon: ({ active, ...props }: SVGHeaderProps) => JSX.Element;
}
