'use client';

import { Loading } from '@/components/common/Loading';
import { useCallback, useEffect, useState } from 'react';
import { Pagination, Post as PostType } from '@/types/app.type';
import { PostDefault } from '@/components/post/PostDefault';
import { useInView } from 'react-intersection-observer';
import { Footer } from '@/components/layouts/MainLayout/Footer';
import { postService } from '@/services/post.service';
import { PostEnum } from '@/common/enum/app.enum';
import { PostSocial } from '@/components/post';

interface PostPaginationProps {
  pagination: Pagination;
  fetchPostsEnum: PostEnum;
}

export const PostPagination = (props: PostPaginationProps) => {
  const { pagination, fetchPostsEnum } = props;
  const [posts, setPosts] = useState<PostType[]>([]);
  const { ref, inView } = useInView();
  const [page, setPage] = useState(pagination.page || 1);
  const [hasMore, setHasMore] = useState(pagination.page < pagination.pages);

  const handleLoadMorePost = useCallback(async () => {
    try {
      const postsRes = await (fetchPostsEnum === PostEnum.DEFAULT
        ? postService.getAllPosts(page + 1)
        : postService.getAllPostSocials(page + 1));
      if (!postsRes) return;
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      setPage((state) => state + 1);
      setHasMore((postsRes.meta?.pagination?.pages || 0) > (postsRes.meta?.pagination?.page || 0));
      setPosts((posts) => [...posts, ...postsRes.posts]);
      return postsRes.posts;
    } catch (e) {
      console.log(e);
      return [];
    }
  }, [fetchPostsEnum, page]);

  useEffect(() => {
    if (inView) {
      handleLoadMorePost().then();
    }
  }, [inView, hasMore, handleLoadMorePost]);

  return (
    <>
      {posts.map((post) =>
        post.tags[0].slug === 'news' ? (
          <PostDefault key={post.excerpt} post={post} />
        ) : (
          <PostSocial key={post.excerpt} post={post} />
        ),
      )}
      {hasMore && (
        <div className="flex w-full flex-col items-center gap-3 pb-4" ref={ref}>
          <Loading />
          <Footer />
        </div>
      )}
    </>
  );
};
