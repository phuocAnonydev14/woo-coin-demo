'use client';

import Image from 'next/image';
import Logo from '@/components/assets/logo.png';
import { adminMenus } from '@/const/menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LayoutMenu } from '@/types/layout.type';
import { usePathname } from 'next/navigation';
export const SideBar = () => {
  const pathname = usePathname();
  const [selectedMenu, setSelectedMenu] = useState<string>(pathname || '/admin');

  useEffect(() => {
    setSelectedMenu(pathname || '/admin');
  }, [pathname]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 px-2 py-8">
      <Link href={'/'}>
        <Image src={Logo.src} alt="Wukoin logo" width={Logo.width} height={Logo.height} />
      </Link>
      {adminMenus.map(({ href, icon }) => {
        return (
          <AdminMenuBox
            menu={{ href, icon }}
            setSelectedMenu={setSelectedMenu}
            isSelected={selectedMenu == href}
            key={href}
          />
        );
      })}
    </div>
  );
};

interface AdminMenuBoxProps {
  isSelected: boolean;
  menu: LayoutMenu;
  setSelectedMenu: (val: string) => void;
  isMobile?: boolean;
}

export const AdminMenuBox = (props: AdminMenuBoxProps) => {
  const {
    isSelected,
    menu: { icon: Icon, href },
    setSelectedMenu,
    isMobile,
  } = props;
  const [hover, setHover] = useState<boolean>(false);

  const menuTitle = href.replace('/', '');
  return (
    <Link href={href}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={cn(
          'justify-left flex cursor-pointer flex-col items-center gap-2 rounded-[8px] px-[10px] py-[10px] transition',
          (hover || isSelected) && 'bg-neutral-100',
          isMobile && 'px-[10px]',
        )}
        onClick={() => setSelectedMenu(href)}
      >
        <Icon active={isSelected} />
        {/*<p className={cn('text-[15px] font-medium text-neutral-400', isSelected && 'text-black')}>*/}
        {/*  {!menuTitle ? 'Home' : capitalize(menuTitle)}*/}
        {/*</p>*/}
      </div>
    </Link>
  );
};
