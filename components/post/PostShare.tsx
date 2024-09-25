"use client"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {PropsWithChildren, useState} from "react";
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton
} from "next-share";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

interface PostShareProps extends PropsWithChildren {
  slug: string,
  title: string
}

export const PostShare = (props: PostShareProps) => {
  const {children, slug, title} = props
  const [isCopied, setCopied] = useState<boolean>(false)
  const currentUrl = `${window.location.origin}/posts/${slug}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    await new Promise(resolve => setTimeout(resolve, 5000))
    setCopied(false)
  }

  return <Dialog>
    <DialogTrigger>{children}</DialogTrigger>
    <DialogContent>
      <div>
        <p className="text-xl font-medium mb-4">Share</p>
        <div className="flex gap-6 items-center">
          <TelegramShareButton
            url={currentUrl}
            title={title}
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <TelegramIcon size={50} round/>
              <p>Telegram</p>
            </div>
          </TelegramShareButton>
          <TwitterShareButton
            url={currentUrl}
            title={title}
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <TwitterIcon size={50} round/>
              <p>Twitter</p>
            </div>
          </TwitterShareButton>
          <LinkedinShareButton url={currentUrl}>
            <div className="flex flex-col justify-center items-center gap-1">
              <LinkedinIcon size={50} round/>
              <p>Linkedin</p>
            </div>
          </LinkedinShareButton>
          <EmailShareButton
            url={currentUrl}
            subject={title}
            body="body"
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <EmailIcon size={50} round/>
              <p>Email</p>
            </div>
          </EmailShareButton>
        </div>
        <div className="mt-6 relative">
          <Input value={currentUrl} size={50} readOnly className="w-full pr-24"/>
          <Button
            className="min-w-[80px] absolute right-0 top-1/2 -translate-y-1/2 rounded-tl-none rounded-bl-none"
            onClick={handleCopy}>{isCopied ? "Copied" : "Copy"}
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}
