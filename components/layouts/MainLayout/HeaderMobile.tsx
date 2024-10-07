'use client';

import { headerMenus } from '@/const/menu';
import { HeaderMenuBox } from '@/components/layouts/MainLayout/Header';
import { useEffect, useState } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';
import { cn } from '@/lib/utils';
import { useDebounceValue } from 'usehooks-ts';

interface HeaderMobileProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

export const HeaderMobile = (props: HeaderMobileProps) => {
  const { setSelectedMenu, selectedMenu } = props;
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const { scrollDir } = useDetectScroll();
  const [debouncedValue] = useDebounceValue(scrollDir, 1);

  useEffect(() => {
    if (debouncedValue === 'up') {
      setIsShowMenu(true);
    }
    if (debouncedValue === 'down') {
      setIsShowMenu(false);
    }
  }, [debouncedValue]);

  return (
    <div
      style={{ animationDuration: '200ms' }}
      className={cn(
        'fixed bottom-0 left-0 flex h-0 w-full justify-center bg-white',
        isShowMenu && 'animate__animated animate__fadeInUp h-[50px]',
      )}
    >
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
  );
};
