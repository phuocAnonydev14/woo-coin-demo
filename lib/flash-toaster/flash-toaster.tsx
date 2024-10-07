import FlashToasterClient from '@/lib/flash-toaster/flash-toaster-client';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';

export function FlashToaster() {
  const flash = cookies().get('flash');
  return (
    <>
      <Toaster position="top-right" />
      <FlashToasterClient flash={flash?.value} />
    </>
  );
}

export async function setFlash(flash: { type: 'success' | 'error'; message: string }) {
  'use server';
  cookies().set('flash', JSON.stringify(flash), {
    path: '/',
    expires: new Date(Date.now() + 10 * 1000),
  });
}
