'use client';

import { CalendarIcon, CommentIcon, HeartIcon, ShareIcon } from '@/components/icons';
import { formatDate } from '@/lib/utils';
import { BookmarkAddIcon } from '@/components/icons/BookmarkAddIcon';
import { Post } from '@/types/app.type';
import { useState } from 'react';

interface PostActionProps {
  post: Post;
  isComment?: boolean;
}

export const PostAction = (props: PostActionProps) => {
  const { post, isComment } = props;
  const { likeCount, commentCount, shareCount, createdAt } = post;
  const [likeState, setLikeState] = useState<number>(likeCount);
  const [isLiked, setIsLiked] = useState<boolean>(post.isLiked);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(post.isBookmarked);

  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-[18px]">
        {!isComment && (
          <div className="flex items-center gap-1">
            <CalendarIcon className="cursor-pointer" />
            <p>{formatDate(createdAt)}</p>
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
        <div className="flex items-center gap-1">
          <ShareIcon className="cursor-pointer" />
          <p>{shareCount}</p>
        </div>
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
