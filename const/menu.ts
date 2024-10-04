import { BookMarkIcon, FeedIcon, FireIcon, NewsIcon } from '@/components/icons';
import { HeaderMenu } from '@/types/layout.type';

export const headerMenus: HeaderMenu[] = [
  {
    href: '/',
    icon: FireIcon,
  },
  {
    href: '/feed',
    icon: FeedIcon,
  },

  {
    href: '/bookmarks',
    icon: BookMarkIcon,
  },
];
