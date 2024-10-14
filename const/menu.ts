import { BookMarkIcon, FeedIcon, FireIcon } from '@/components/icons';
import { LayoutMenu } from '@/types/layout.type';
import { House, User } from 'lucide-react';
import { ArticleIcon } from '@/components/icons/Article';

export const headerMenus: LayoutMenu[] = [
  {
    href: '/',
    icon: FireIcon,
  },
  {
    href: '/feed',
    icon: FeedIcon,
  },
  {
    href: '/articles',
    icon: ArticleIcon,
  },
  {
    href: '/bookmarks',
    icon: BookMarkIcon,
  },
];

export const adminMenus: LayoutMenu[] = [
  {
    href: '/admin',
    icon: House,
  },
  {
    href: '/admin/user',
    icon: User,
  },
];
