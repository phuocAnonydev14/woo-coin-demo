import { PostSocial } from '@/components/post';
import { postService } from '@/services/post.service';
import { PostPagination } from '@/components/post-pagination';
import { PostEnum } from '@/common/enum/app.enum';

const handleFetchPosts = async () => {
  try {
    const postsRes = await postService.getAllPostSocials(1);
    if (!postsRes) return { posts: [], metaData: null };
    return { posts: postsRes.posts, metaData: postsRes.meta };
  } catch (e) {
    console.log(e);
    return { posts: [], metaData: null };
  }
};

export default async function FeedPage() {
  const postsRes = await handleFetchPosts();
  if (!postsRes) return;
  const { posts, metaData } = postsRes;

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <PostSocial key={post.title} post={post} />
      ))}
      {metaData?.pagination && (
        <PostPagination fetchPostsEnum={PostEnum.SOCIAL} pagination={metaData.pagination} />
      )}
    </div>
  );
}
