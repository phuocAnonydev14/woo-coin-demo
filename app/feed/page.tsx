import { PostSocial } from '@/components/post';
import {postService} from "@/services/post.service";
import {getTweetStatusFromHtml, getTypeFromHtml} from "@/lib/utils";
import {PostPagination} from "@/components/post-pagination";

const handleFetchPosts = async () => {
  try {
    const postsRes = await postService.getAllPosts(1,999)
    if(!postsRes) return {posts: [], metaData: null}
    return {posts: postsRes.posts.filter(post => {
        const type = getTypeFromHtml(post.html)
        return type !== "Post"
      }).filter(post => {
        const tweetStatus = getTweetStatusFromHtml(post.html)
        return tweetStatus === "Standard"
      }), metaData: postsRes.meta}
  } catch (e) {
    console.log(e)
    return {posts: [], metaData: null}
  }
}

export default async function FeedPage() {
  const postsRes = await handleFetchPosts()
  if(!postsRes) return
  const {posts, metaData} = postsRes

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <PostSocial key={post.title} post={post} />
      ))}
      {metaData?.pagination && <PostPagination type="social" currentPost={posts} pagination={metaData.pagination}/>}
    </div>
  );
}
