'use client';

import { Header } from '@/components/layouts/MainLayout/Header';
import { PropsWithChildren } from 'react';
import { Container } from '@/components/common/Container';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-1 flex flex-col items-center px-3 lg:px-0">
      <ProgressBar height="3px" color="#000" options={{ showSpinner: false }} shallowRouting />
      <div className="flex w-auto flex-col items-center lg:max-w-[1054px] xl:w-[1054px]">
        <Header />
        <Container className="mt-10">{children}</Container>
      </div>
    </div>
  );
};
