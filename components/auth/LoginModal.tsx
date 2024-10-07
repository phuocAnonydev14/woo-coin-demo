import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import Logo from '@/components/assets/logo.png';
import { LoginForm } from '@/components/auth/LoginForm';

export const LoginModal = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="max-w-sm rounded-lg md:max-w-md">
          <DialogHeader>
            <DialogTitle className="mb-2 flex flex-col items-center justify-center gap-y-2">
              <Image
                src={Logo.src}
                alt=""
                width={Logo.width}
                height={Logo.height}
                objectFit="cover"
              />
              <p className="text-2xl font-semibold leading-8">Log in Wukoin</p>
            </DialogTitle>
          </DialogHeader>
          <div className="w-full">
            <LoginForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
