"use client"
import Link from "next/link";
import {Post as PostType} from "@/types/app.type";
import {PostAction} from "@/components/post/PostAction";
import {PostTag} from "@/components/post/PostTag";
import {PostImage} from "@/components/post/PostImage";

export interface PostProps {
  isDetailPage?: boolean,
  post: PostType
}

export const PostDefault = (props: PostProps) => {
  const {isDetailPage, post} = props
  const {content, org, title, slug, user} = post

  return <div className="flex flex-col gap-5 w-full">
    <div className="flex items-center gap-[8px]">
      <img className="w-6 h-6 rounded-full object-cover"
           src="https://i.pinimg.com/564x/cb/0a/f5/cb0af57340c9be2d6943d565e198fdb6.jpg" alt="User avatar"/>
      <div className="flex items-center gap-1">
        <span className="font-medium text-[15px] cursor-pointer">{user}</span>
        <span className="text-neutral-600">by</span>
        <span className="font-medium text-[15px] cursor-pointer">{org}</span>
      </div>
    </div>
    <div className="flex flex-col gap-3">
      {!isDetailPage ? <Link href={`/posts/${slug}`}>
          <h2 className="font-semibold text-xl">{title} </h2>
        </Link> :
        <h2 className="font-semibold text-xl">{title} </h2>}
      <p>{content}</p>
      {post?.image && post.image.length > 0 && <PostImage images={post.image}/>}
    </div>
    <PostTag />
    <PostAction post={post}/>


    <div className="bg-neutral-200 h-[2px] w-full mt-1"/>
  </div>
}
