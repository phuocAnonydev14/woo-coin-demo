'use client';

import {Loading} from '@/components/common/Loading';
import {useCallback, useEffect, useState} from 'react';
import { Pagination, Post, Post as PostType } from '@/types/app.type';
import {PostDefault} from '@/components/post/PostDefault';
import {useInView} from 'react-intersection-observer';
import {Footer} from '@/components/layouts/MainLayout/Footer';
import {postService} from "@/services/post.service";

interface PostPaginationProps {
  pagination: Pagination;
  initPosts: Post[]
}

export const PostPagination = (props: PostPaginationProps) => {
  const {pagination, initPosts} = props
  const [posts, setPosts] = useState<PostType[]>([]);
  const {ref, inView} = useInView();
  const [page, setPage] = useState(pagination.page || 1);
  const [hasMore, setHasMore] = useState(pagination.page < pagination.pages);

  const handleLoadMorePost = useCallback(async () => {
    try {
      const postsRes = await postService.getAllPosts(page + 1)
      await new Promise(resolve => {setTimeout(resolve,500)})
      if(!postsRes || !postsRes.posts)
      {
        setPosts(posts =>  ([...posts,...initPosts]))
        setHasMore(false)
        return
      }
      if(postsRes?.posts)
      setPage(state => state + 1)
      setHasMore((postsRes.meta?.pagination?.pages || 0) > (postsRes.meta?.pagination?.page || 0))
      setPosts(posts =>  ([...posts,...postsRes.posts]))
      return postsRes.posts
    } catch (e) {
      console.log(e)
      return []
    }
  },[page])

  useEffect(() => {
    if (inView) {
      handleLoadMorePost().then();
    }
  }, [inView, hasMore, handleLoadMorePost]);

  return (
    <>
      {posts.map((post) => (
        <PostDefault key={post.excerpt} post={post}/>
      ))}
      {hasMore && <div className="flex h-16 w-full flex-col items-center gap-3 lg:h-32" ref={ref}>
        <Loading/>
        <Footer/>
      </div>
      }
    </>
  );
};
