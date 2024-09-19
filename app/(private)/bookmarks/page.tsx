import {PostDefault, PostSocial} from "@/components/post";
import {mockPosts} from "@/mocks/post";

export default function FeedPage() {
  return <div className="flex flex-col gap-6">
    {mockPosts.map(post => (post.type === "social" ? <PostSocial key={post.content} post={post}/> :
      <PostDefault key={post.content} post={post}/>))}

  </div>
}

