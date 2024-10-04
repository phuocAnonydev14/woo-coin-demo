'use client';
import Link from 'next/link';
import {Post as PostType} from '@/types/app.type';
import {PostAction} from '@/components/post/PostAction';
import {PostImage} from '@/components/post/PostImage';
import {filterHtmlString, getAuthorFromHtml, getIconFromHtml, getSourceFromHtml} from '@/lib/utils';
import parse from 'html-react-parser';
import moment from "moment/moment";

export interface PostProps {
  isDetailPage?: boolean;
  post: PostType;
}

export const PostDefault = (props: PostProps) => {
  const {isDetailPage, post} = props;
  const {excerpt, custom_excerpt, html, title, slug} = post;

  const content = custom_excerpt || excerpt
  const author = getAuthorFromHtml(html)
  const source = getSourceFromHtml(html)
  const icon = getIconFromHtml(html)

  return (
    <div className="mb-3 flex w-full flex-col gap-5">
      <div className="flex items-center gap-[8px]">
        <div className="flex items-center gap-1">
          <img
            className="h-6 w-6 rounded-full object-cover"
            src={icon}
            alt="User avatar"
          />
          <span className="cursor-pointer text-[15px] font-medium">{source}</span>
          <span className="text-neutral-600">by</span>
          <span className="text-[15px] font-medium">{author}</span>
          <span className="ml-2 text-sm text-neutral-600">
                  {moment(post.published_at).fromNow(true)}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {!isDetailPage ? (
          <Link href={`/posts/${slug}`}>
            <h2 className="mb-3 text-xl font-semibold">{title} </h2>
            <p>{content}</p>
          </Link>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{title} </h2>
            <p>{content}</p>
            <PostImage isDetailPage images={post.feature_image}/>
            <div
              className="flex flex-col gap-y-1.5 tracking-wide leading-7 break-words">{parse(filterHtmlString(html))}</div>
          </div>
        )}
      </div>
      {/*<PostTag/>*/}
      <PostAction post={post}/>
      <div className="mt-1 h-[2px] w-full bg-neutral-200"/>
    </div>
  );
};
