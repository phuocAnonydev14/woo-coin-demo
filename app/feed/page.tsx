import {PostSocial} from "@/components/post";
import {mockPosts} from "@/mocks/post";

export default function FeedPage() {
  return <div className="flex flex-col gap-6">
    {mockPosts.map(post => (<PostSocial key={post.content} post={post}/>))}
  </div>
}
