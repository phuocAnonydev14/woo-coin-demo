"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {MailIcon} from "@/components/icons";
import teleLogo from "@/components/assets/teleLogoColor.png"
import metamaskLogo from "@/components/assets/metamaskLogo.png"
import googleLogo from "@/components/assets/googleLogo.png"
import Image from "next/image";
import {useGoogleLogin} from "@react-oauth/google";

export const LoginForm = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

  return <div className="w-full flex flex-col justify-center items-center gap-y-4">
    <div className="w-full h-[1px] bg-neutral-200 mb-2"/>
    <div className="flex flex-col gap-y-3 w-full">
      <Input placeholder="Enter your email address" className="p-3 w-full"/>
      <Input placeholder="Enter your password" type="password" className="p-3 w-full"/>
      <Button size="lg" className="p-3 flex justify-center gap-x-1"><MailIcon />Sign in</Button>
    </div>
    <Separate />
    <div className="flex flex-col gap-y-3 w-full">
      <Button size="lg" className="p-3 flex justify-start gap-x-2" variant="outline"><Image src={teleLogo.src} width={teleLogo.width} height={teleLogo.height} alt="tele" /> Login with Telegram</Button>
      <Button size="lg" className="p-3 flex justify-start gap-x-1" variant="outline"><Image src={metamaskLogo.src} width={metamaskLogo.width} height={metamaskLogo.height} alt="metamask" /> Login with Metamask</Button>
    </div>
    <Separate />
    <div className="w-full">
      <Button onClick={() => login()} size="lg" className="p-3 flex justify-start gap-x-1 w-full" variant="outline">
        <Image src={googleLogo.src} width={googleLogo.width} height={googleLogo.height} alt="google" />
        Login with Google
      </Button>
    </div>
  </div>
}

const Separate = () => {
  return <div className="relative w-full">
    <div className="w-full bordered border-neutral-200 border-b-[2px]">
      <div className="absolute left-[50%] top-[60%] -translate-y-1/2 -translate-x-1/2 px-4 bg-white text-neutral-300">
        OR
      </div>
    </div>
  </div>
}
