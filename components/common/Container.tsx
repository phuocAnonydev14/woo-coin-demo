import {HTMLAttributes, PropsWithChildren} from "react";
import {cn} from "@/lib/utils";

export const Container = ({children, ...props}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("md:w-[638px] w-auto",props.className)} >
      {children}
    </div>

}
