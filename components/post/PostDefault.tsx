'use client';
import Link from 'next/link';
import {Post as PostType} from '@/types/app.type';
import {PostAction} from '@/components/post/PostAction';
import {PostTag} from '@/components/post/PostTag';
import {PostImage} from '@/components/post/PostImage';
import {getAuthorFromHtml} from "@/lib/utils";
import parse from 'html-react-parser';

export interface PostProps {
  isDetailPage?: boolean;
  post: PostType;
}

export const PostDefault = (props: PostProps) => {
  const {isDetailPage, post} = props;
  const {excerpt, custom_excerpt, html, title, slug} = post;

  const content = custom_excerpt || excerpt
  const author = getAuthorFromHtml(html)

  return (
    <div className="flex w-full flex-col gap-5 mb-3">
      <div className="flex items-center gap-[8px]">
        <img
          className="h-6 w-6 rounded-full object-cover"
          src="https://i.pinimg.com/564x/cb/0a/f5/cb0af57340c9be2d6943d565e198fdb6.jpg"
          alt="User avatar"
        />
        <div className="flex items-center gap-1">
          <span className="cursor-pointer text-[15px] font-medium">{author}</span>
          {/*<span className="text-neutral-600">by</span>*/}
          {/*<span className="cursor-pointer text-[15px] font-medium">{org}</span>*/}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {!isDetailPage ?
          <Link href={`/posts/${slug}`}>
              <h2 className="text-xl font-semibold">{title} </h2>
            <p>{content}</p>
          </Link>
        : <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{title} </h2>
            <p>{content}</p>
            <PostImage isDetailPage images={post.feature_image}/>
            <div>{parse(html)}</div>
          </div>}
        {post?.feature_image && !isDetailPage && <PostImage images={post.feature_image}/>}
      </div>
      {/*<PostTag/>*/}
      <PostAction post={post}/>
      <div className="mt-1 h-[2px] w-full bg-neutral-200"/>
    </div>
  );
};
