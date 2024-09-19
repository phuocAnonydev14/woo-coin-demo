"use client";

import {Header} from "@/components/layouts/MainLayout/Header";
import {PropsWithChildren} from "react";
import {Container} from "@/components/common/Container";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const MainLayout = ({children}: PropsWithChildren) => {
  return <div className="flex flex-col items-center mt-1 px-3 lg:px-0">
    <ProgressBar
      height="3px"
      color="#000"
      options={{ showSpinner: false }}
      shallowRouting
    />
    <div className="lg:w-[1054px] w-auto flex flex-col items-center">
    <Header/>
    <Container className="lg:mt-6 mt-4 ">
      {children}
    </Container>
    </div>
  </div>
}
