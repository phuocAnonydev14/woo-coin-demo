import {PostDefault} from '@/components/post/PostDefault';
import {PostPagination} from '@/components/post-pagination';
import {postService} from "@/services/post.service";

const handleFetchPosts = async () => {
  try {
    const postsRes = await postService.getAllPosts(1)
    if(!postsRes) return {posts: [], metaData: null}
    return {posts: postsRes.posts, metaData: postsRes.meta}
  } catch (e) {
    console.log(e)
    return {posts: [], metaData: null}
  }
}

export default async function Home() {
  const postsRes = await handleFetchPosts()
  if(!postsRes) return
  const {posts, metaData} = postsRes

  return (
    <div className="flex w-full flex-col gap-6">
      {posts.map((post) => (
        <PostDefault key={post.excerpt} post={post}/>
      ))}
      {metaData?.pagination && <PostPagination currentPost={posts} pagination={metaData.pagination}/>}
    </div>
  );
}
