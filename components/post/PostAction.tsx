'use client';

import { CalendarIcon, CommentIcon, HeartIcon, ShareIcon } from '@/components/icons';
import { formatDate } from '@/lib/utils';
import { BookmarkAddIcon } from '@/components/icons/BookmarkAddIcon';
import { Post } from '@/types/app.type';
import { useState } from 'react';
import {PostShare} from "@/components/post/PostShare";

interface PostActionProps {
  post: Post;
  isComment?: boolean;
}

export const PostAction = (props: PostActionProps) => {
  const { post, isComment } = props;
  const { likeCount, commentCount, shareCount, published_at } = post;
  const [likeState, setLikeState] = useState<number>(likeCount || 0);
  const [isLiked, setIsLiked] = useState<boolean>(!!post.isLiked);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(!!post.isBookmarked);

  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-[18px]">
        {!isComment && (
          <div className="flex items-center gap-1">
            <CalendarIcon className="cursor-pointer" />
            <p>{formatDate(published_at)}</p>
          </div>
        )}
        <div className="flex items-center gap-1">
          <HeartIcon
            className="cursor-pointer"
            fill={isLiked ? 'black' : 'none'}
            onClick={() => {
              setIsLiked(!isLiked);
              setLikeState(likeState + (isLiked ? -1 : 1));
            }}
          />
          <p>{likeState}</p>
        </div>
        <div className="flex items-center gap-1">
          <CommentIcon className="cursor-pointer" />
          <p>{commentCount}</p>
        </div>
        <PostShare slug={post.slug} title={post.title}>
        <div className="flex items-center gap-1">
          <ShareIcon className="cursor-pointer" />
          <p>{shareCount}</p>
        </div>
        </PostShare>
      </div>
      {!isComment && (
        <BookmarkAddIcon
          className="cursor-pointer"
          active={isBookmarked}
          onClick={() => setIsBookmarked(!isBookmarked)}
        />
      )}
    </div>
  );
};
