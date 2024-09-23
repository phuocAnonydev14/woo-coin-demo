import { PostDefault } from '@/components/post/PostDefault';
import { mockPosts } from '@/mocks/post';

export default function FeedPage() {
  return (
    <div className="flex flex-col gap-6">
      {mockPosts.map((post) => (
        <PostDefault key={post.content} post={post} />
      ))}
    </div>
  );
}
