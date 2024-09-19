"use client"

import {PostAction} from "@/components/post/PostAction";
import {PostTag} from "@/components/post/PostTag";
import {CheckBadgeIcon, CommentLineIcon} from "@/components/icons";
import Link from "next/link";
import {PostProps} from "@/components/post/PostDefault";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import {PostImage} from "@/components/post/PostImage";


export const PostSocial = (props: PostProps & { isComment?: boolean, CommentChild?: ReactNode }) => {
	const {post, isDetailPage, CommentChild, isComment} = props
	const {content, org, user} = post

	return (
		<>
			<div className="flex gap-[8px]">
				<div>
					<img className="w-6 h-6 rounded-full object-cover"
							 src="https://i.pinimg.com/564x/cb/0a/f5/cb0af57340c9be2d6943d565e198fdb6.jpg" alt="User avatar"/>
					{CommentChild && <CommentLineIcon />}
				</div>
				<div className="flex flex-col gap-[17px] w-full">
					<div className="flex flex-col gap-[7px]">
						<div className="flex items-center gap-1">
            <span className="font-medium text-[15px] cursor-pointer flex items-center gap-1">{user}
							<CheckBadgeIcon/></span>
							<span className="text-neutral-600">by</span>
							<span className="font-medium text-[15px] cursor-pointer">{org}</span>
						</div>
						<div className="flex flex-col gap-3">
							{(isDetailPage || isComment) ? <p>{content}</p> : <Link href={`posts/${post.slug}`}>
								{content}
							</Link>}
							{post?.image && post.image.length > 0 && <PostImage images={post.image}/>}
						</div>
						{!isComment && <PostTag/>}
					</div>
					<PostAction post={post} isComment/>
				</div>
			</div>
			<div className={cn("bg-neutral-200 h-[2px] w-full", isComment && "mt-4")}/>
			{CommentChild && <div className="mt-4">
				{CommentChild}
      </div>
			}
		</>)
}
