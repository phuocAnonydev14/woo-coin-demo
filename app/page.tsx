import {PostDefault} from '@/components/post/PostDefault';
import {PostPagination} from '@/components/post-pagination';
import {postService} from "@/services/post.service";
import {getTweetStatusFromHtml, getTypeFromHtml} from "@/lib/utils";

const handleFetchPosts = async () => {
  try {
    const postsRes = await postService.getAllPosts(1, 399)
    if (!postsRes) return {posts: [], metaData: null}
    console.log("postsRes",postsRes)
    return {
      posts: postsRes.posts.filter(post => {
        const type = getTypeFromHtml(post.html)
        return type === "Post"
      }), metaData: postsRes.meta
    }
  } catch (e) {
    console.log(e)
    return {posts: [], metaData: null}
  }
}

export default async function Home() {
  const postsRes = await handleFetchPosts()
  if (!postsRes) return
  const {posts, metaData} = postsRes
  console.log("posts",posts)
  return (
    <div className="flex w-full flex-col gap-6">
      {posts.map((post, index) => (
        index < 10 &&
        <PostDefault key={post.excerpt} post={post}/>
      ))}
      {metaData?.pagination && <PostPagination currentPost={posts} pagination={metaData.pagination}/>}
    </div>
  );
}
