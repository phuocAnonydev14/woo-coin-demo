'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MailIcon } from '@/components/icons';
import teleLogo from '@/components/assets/teleLogoColor.png';
import metamaskLogo from '@/components/assets/metamaskLogo.png';
import googleLogo from '@/components/assets/googleLogo.png';
import Image from 'next/image';
import { useGoogleLogin } from '@react-oauth/google';
import { useSDK } from '@metamask/sdk-react';
import { TelegramResponseType } from '@/types/tele.type';
import { TELE_BOT_ID } from '@/const/env-keys';

export const LoginForm = () => {
  const handleTelegramAuth = () => {
    console.log(window.Telegram);
    window.Telegram.Login.auth(
      { bot_id: TELE_BOT_ID, request_access: 'true' },
      (data: TelegramResponseType) => {
        if (!data) {
          console.log('ERROR: something went wrong');
        }

        // Validate data here
        console.log(data);
      },
    );
  };
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  const { sdk, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  console.log('account', account);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <div className="mb-2 h-[1px] w-full bg-neutral-200" />
      <div className="flex w-full flex-col gap-y-3">
        <Input placeholder="Enter your email address" className="w-full p-3" />
        <Input placeholder="Enter your password" type="password" className="w-full p-3" />
        <Button size="lg" className="flex justify-center gap-x-1 p-3">
          <MailIcon />
          Sign in
        </Button>
      </div>
      <Separate />
      <div className="flex w-full flex-col gap-y-3">
        <Button
          size="lg"
          className="flex justify-start gap-x-2 p-3"
          variant="outline"
          onClick={handleTelegramAuth}
        >
          <Image src={teleLogo.src} width={teleLogo.width} height={teleLogo.height} alt="tele" />
          Login with Telegram
        </Button>
        <Button
          disabled={connecting}
          size="lg"
          className="flex justify-start gap-x-1 p-3"
          variant="outline"
          onClick={() => connect()}
        >
          <Image
            src={metamaskLogo.src}
            width={metamaskLogo.width}
            height={metamaskLogo.height}
            alt="metamask"
          />
          Login with Metamask
        </Button>
      </div>
      <Separate />
      <div className="w-full">
        <Button
          onClick={() => login()}
          size="lg"
          className="flex w-full justify-start gap-x-1 p-3"
          variant="outline"
        >
          <Image
            src={googleLogo.src}
            width={googleLogo.width}
            height={googleLogo.height}
            alt="google"
          />
          Login with Google
        </Button>
      </div>
    </div>
  );
};

const Separate = () => {
  return (
    <div className="relative w-full">
      <div className="bordered w-full border-b-[2px] border-neutral-200">
        <div className="absolute left-[50%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-neutral-300">
          OR
        </div>
      </div>
    </div>
  );
};
