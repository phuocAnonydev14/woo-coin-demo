import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layouts/MainLayout';
import { proText } from '@/app/fonts/font';
import { ReactNode } from 'react';
import 'animate.css';
import {FlashToaster} from "@/lib/flash-toaster";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proText.className} antialiased`}>
      <FlashToaster />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
