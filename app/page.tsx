import { PostDefault } from '@/components/post/PostDefault';
import { mockPosts } from '@/mocks/post';
import { PostPagination } from '@/components/post-pagination';
export default function Home() {
  return (
    <div className="flex w-full flex-col gap-6">
      {mockPosts.map((post) => (
        <PostDefault key={post.content} post={post} />
      ))}
      <PostPagination />
    </div>
  );
}
