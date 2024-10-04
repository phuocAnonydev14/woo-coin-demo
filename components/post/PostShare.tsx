'use client';

import { PropsWithChildren } from 'react';
import {
  TelegramShareButton,
  TwitterShareButton,
} from 'next-share';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Link} from "lucide-react"
import { toast } from 'sonner';
import teleLogo from '@/components/assets/teleLogo.png'
import twitterLogo from '@/components/assets/twitterLogo.png'
import Image from 'next/image';

interface PostShareProps extends PropsWithChildren {
  slug: string;
  title: string;
}

export const PostShare = (props: PostShareProps) => {
  const { children, slug, title } = props;
  const currentUrl = `${window.location.origin}/posts/${slug}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentUrl);
    toast.success("Copied")
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="font-medium ">
        <DropdownMenuItem onClick={handleCopy}>
          <div className="flex w-[150px] items-center justify-between gap-4 cursor-pointer">
            <p>Copy link</p>
            <Link size={20}/>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="w-full">
          <TelegramShareButton className={'w-full'} url={currentUrl} title={title}>
            <div className="flex w-[150px] items-center justify-between gap-4">
              <p>Telegram</p>
              <Image src={teleLogo} alt="" width={20} height={20} objectFit="cover" />
            </div>
          </TelegramShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TwitterShareButton url={currentUrl} title={title}>
            <div className="flex w-[150px]  items-center justify-between gap-4">
              <p>Twitter</p>
              <Image src={twitterLogo} alt="" width={20} height={20} objectFit="cover" />
            </div>
          </TwitterShareButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
