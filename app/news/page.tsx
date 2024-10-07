import { PostSocial } from '@/components/post';
import { postService } from '@/services/post.service';

const handleFetchPosts = async () => {
  try {
    const postsRes = await postService.getAllPosts(1);
    if (!postsRes) return { posts: [], metaData: null };
    return { posts: postsRes.posts, metaData: postsRes.meta };
  } catch (e) {
    console.log(e);
    return { posts: [], metaData: null };
  }
};

export default async function NewsPage() {
  const postsRes = await handleFetchPosts();
  if (!postsRes) return;
  const { posts } = postsRes;

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <PostSocial key={post.title} post={post} />
      ))}
    </div>
  );
}
