"use client"

import {Loading} from "@/components/common/Loading";
import {useEffect, useState} from "react";
import {Post as PostType} from "@/types/app.type";
import {PostDefault} from "@/components/post/PostDefault";
import {mockPosts} from "@/mocks/post";
import {useInView} from 'react-intersection-observer'
import {Footer} from "@/components/layouts/MainLayout/Footer";

export const PostPagination = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const {ref, inView} = useInView()

  const handleLoadMorePost = async () => {
    try {
      await new Promise<void>(resolve => setTimeout(resolve, 1000));
      setPosts(posts => ([...posts, ...mockPosts]));
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (inView) {
      handleLoadMorePost().then()
    }
  }, [inView]);

  return <>
    {posts.map(post => (<PostDefault key={post.content} post={post}/>))}
    <div className="w-full flex flex-col items-center gap-3 lg:h-32 h-16 " ref={ref}>
      <Loading/>
      <Footer />
    </div>
  </>
}
