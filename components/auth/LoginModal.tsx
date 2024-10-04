import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {PropsWithChildren} from "react";
import Image from "next/image";
import Logo from "@/components/assets/logo.png";
import {LoginForm} from "@/components/auth/LoginForm";

export const LoginModal = ({children}:PropsWithChildren) => {
  return <div>
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent className="rounded-lg md:max-w-md max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex flex-col justify-center items-center gap-y-2 mb-2">
              <Image src={Logo.src} alt="" width={Logo.width} height={Logo.height} objectFit="cover" />
              <p className="font-semibold text-2xl leading-8">Log in Wukoin</p>
            </DialogTitle>
          </DialogHeader>
          <div className="w-full">
            <LoginForm />
          </div>
      </DialogContent>
    </Dialog>
  </div>
}
