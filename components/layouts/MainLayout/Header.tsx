'use client';

import { Button } from '@/components/ui/button';
import { headerMenus } from '@/const/menu';
import { useEffect, useMemo, useState } from 'react';
import { capitalize, cn } from '@/lib/utils';
import { ArrowLeftIcon } from '@/components/icons';
import { HeaderMenu } from '@/types/layout.type';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { HeaderMobile } from '@/components/layouts/MainLayout/HeaderMobile';
import Image from 'next/image';
import logo from '@/components/assets/logo.png';
import { LoginModal } from '@/components/auth/LoginModal';

const backArrowFilter = ['/posts/'];

export const Header = () => {
  const pathname = usePathname();
  const [selectedMenu, setSelectedMenu] = useState<string>(pathname || '/');
  const router = useRouter();

  const isShowBackArrow = useMemo(() => {
    let isShow = false;
    backArrowFilter.forEach((item) => {
      if (pathname.includes(item)) {
        isShow = true;
      }
    });
    return isShow;
  }, [pathname]);

  useEffect(() => {
    setSelectedMenu(pathname || '/');
  }, [pathname]);

  return (
    <div className="sticky top-0 z-20 flex w-full items-center justify-between overflow-hidden bg-white py-2">
      <div className="relative md:hidden">
        <ArrowLeftIcon
          onClick={() => router.back()}
          className={cn(
            'absolute left-[4px] top-[-19px] flex items-center justify-center rounded-[8px] opacity-0 transition',
            isShowBackArrow && 'cursor-pointer opacity-100',
          )}
        />
      </div>
      <div>
        <Link href={'/'}>
          <Image width={48} height={48} className="rounded-full" src={logo.src} alt="Wukoin logo" />
        </Link>
      </div>
      <div className={cn('relative hidden w-[638px] items-center justify-center gap-4 md:flex')}>
        <ArrowLeftIcon
          onClick={() => router.back()}
          className={cn(
            'absolute left-[4px] flex items-center justify-center rounded-[8px] opacity-0 transition',
            isShowBackArrow && 'cursor-pointer opacity-100',
          )}
        />
        {headerMenus.map((menu) => {
          return (
            <HeaderMenuBox
              key={menu.href}
              isSelected={selectedMenu === menu.href}
              menu={menu}
              setSelectedMenu={(val) => setSelectedMenu(val)}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <LoginModal>
          <Button>Login</Button>
        </LoginModal>
        <div className="block md:hidden">
          <HeaderMobile setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

interface HeaderMenuBoxProps {
  isSelected: boolean;
  menu: HeaderMenu;
  setSelectedMenu: (val: string) => void;
  isMobile?: boolean;
}

export const HeaderMenuBox = (props: HeaderMenuBoxProps) => {
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
          'justify-left flex cursor-pointer flex-col items-center gap-2 rounded-[8px] px-[30px] py-[10px] transition',
          hover && 'bg-neutral-100',
          isMobile && 'px-[10px]',
        )}
        onClick={() => setSelectedMenu(href)}
      >
        <Icon active={isSelected} />
        <p className={cn('text-[15px] font-medium text-neutral-400', isSelected && 'text-black')}>
          {!menuTitle ? 'Home' : capitalize(menuTitle)}
        </p>
      </div>
    </Link>
  );
};
