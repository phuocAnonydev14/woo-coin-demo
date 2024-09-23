import { PostDefault, PostSocial } from '@/components/post';
import { mockPosts } from '@/mocks/post';

export default function PostDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const currentPost = mockPosts.find((post) => post.slug === slug) || mockPosts[0];

  return (
    <div>
      {currentPost.type === 'default' ? (
        <PostDefault post={currentPost} isDetailPage />
      ) : (
        <PostSocial post={currentPost} />
      )}
      <div className="mt-6">
        <PostSocial
          post={mockPosts[0]}
          isComment
          CommentChild={<PostSocial post={mockPosts[1]} isComment />}
        />
      </div>
    </div>
  );
}
