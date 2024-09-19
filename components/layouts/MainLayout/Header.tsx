"use client"

import {Button} from "@/components/ui/button";
import {headerMenus} from "@/const/menu";
import {useMemo, useState} from "react";
import {capitalize, cn} from "@/lib/utils";
import {ArrowLeftIcon} from "@/components/icons";
import {HeaderMenu} from "@/types/layout.type";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {HeaderMobile} from "@/components/layouts/MainLayout/HeaderMobile";

const backArrowFilter = ["/posts/"]

export const Header = () => {
  const pathname = usePathname()
  const [selectedMenu, setSelectedMenu] = useState<string>(pathname || '/')

  const isShowBackArrow = useMemo(() => {
    let isShow = false
    backArrowFilter.forEach((item) => {
      if(pathname.includes(item)){
        isShow = true
      }
    })
    return isShow
  },[pathname])

  return <div className="justify-between flex items-center w-full sticky top-0 bg-white py-2 overflow-hidden">
    <div>
      <img className="rounded-full w-[48px] h-[48px]"
           src="/images/logo.png"
           alt="User avatar"/>
    </div>
    <div className={cn("relative w-[638px] md:flex items-center gap-6 justify-center hidden")}>
      <Link href={"/"} className="absolute left-0">
        <ArrowLeftIcon
          className={cn("rounded-[8px] opacity-0 flex justify-center items-center transition",
            isShowBackArrow && "opacity-100 cursor-pointer")}
        />
      </Link>
      {headerMenus.map(menu => {
        return <HeaderMenuBox key={menu.href} isSelected={selectedMenu === menu.href} menu={menu} setSelectedMenu={(val) => setSelectedMenu(val)}/>
      })}
    </div>
    <div className="flex gap-2 items-center">
      <Button>Login</Button>
      <div className="md:hidden block">
        <HeaderMobile setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
      </div>
    </div>
  </div>
}

interface HeaderMenuBoxProps {
  isSelected: boolean,
  menu: HeaderMenu
  setSelectedMenu: (val: string) => void,
  isMobile?: boolean
}

export const HeaderMenuBox = (props: HeaderMenuBoxProps) => {
  const {isSelected, menu: {icon: Icon, href}, setSelectedMenu, isMobile} = props
  const [hover, setHover] = useState<boolean>(false);

  const menuTitle = href.replace("/","")
  return (
    <Link href={href} >
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn("rounded-[8px] px-[30px] py-[10px] flex justify-left items-center cursor-pointer transition gap-2", hover && "bg-neutral-100",isMobile && "px-[10px]")}
      onClick={() => setSelectedMenu(href)}>
      <Icon active={isSelected}/>
      {isMobile && <p className={cn("font-medium text-neutral-600",isSelected && "text-black")}>{!menuTitle ? "Home" : capitalize(menuTitle)}</p>}
    </div>
    </Link>
  )
}
