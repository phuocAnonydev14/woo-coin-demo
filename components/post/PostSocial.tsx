'use client';

import {PostAction} from '@/components/post/PostAction';
import {CheckBadgeIcon, CommentLineIcon} from '@/components/icons';
import Link from 'next/link';
import {PostProps} from '@/components/post/PostDefault';
import {ReactNode} from 'react';
import {cn, filterHtmlString, getAuthorFromHtml, getMediaLinkFromHtml, getProfileImageFromHtml} from '@/lib/utils';
import {PostImage} from '@/components/post/PostImage';
import moment from 'moment';
import parse from "html-react-parser";

export const PostSocial = (
  props: PostProps & { isComment?: boolean; CommentChild?: ReactNode },
) => {
  const {post, isDetailPage, CommentChild, isComment} = props;
  const {excerpt,custom_excerpt, html} = post;

  const content = custom_excerpt || excerpt
  const author = getAuthorFromHtml(html)
  const profileImage = getProfileImageFromHtml(html)

  const mediaLinks = getMediaLinkFromHtml(html)

  return (
    <div>
      <div className="flex gap-[8px]">
        <div className="sm:w-fit">
          <img
            className="h-9 w-9 rounded-full object-cover object-top"
            src={profileImage || "https://i.pinimg.com/564x/cb/0a/f5/cb0af57340c9be2d6943d565e198fdb6.jpg"}
            alt="User avatar"
          />
          {CommentChild && <CommentLineIcon />}
        </div>
        <div className="flex sm:w-fit flex-col gap-[17px] flex-1">
          <div className="flex flex-col gap-[7px]">
            <div className="flex items-center gap-1">
              <span className="flex cursor-pointer items-center gap-1 text-[15px] font-semibold">
                {author}
                <CheckBadgeIcon />
              </span>
              {/*<span className="text-neutral-600">by</span>*/}
              {/*<span className="cursor-pointer text-[15px] font-medium">{org}</span>*/}
              {isComment && (
                <span className="ml-2 text-sm text-neutral-600">
                  {moment(post.published_at).fromNow(true)}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {isDetailPage || isComment ? (
                <p>{parse(filterHtmlString(html))}</p>
              ) : (
                <Link href={`posts/${post.slug}`}><p className="break-words">{parse(filterHtmlString(html))}</p></Link>
              )}
              {mediaLinks && mediaLinks.length > 0 && <PostImage images={mediaLinks} />}
            </div>
            {/*{!isComment && <PostTag/>}*/}
          </div>
          <PostAction post={post} isComment={isComment} />
        </div>
      </div>
      {CommentChild ? (
        <div className="mt-4">{CommentChild}</div>
      ) : (
        <div className={cn('h-[2px] mt-[17px] w-full bg-neutral-200')} />
      )}
    </div>
  );
};
