import {PostDefault} from "@/components/post/PostDefault";
import {mockPosts} from "@/mocks/post";
import {PostPagination} from "@/components/post-pagination";
import 'animate.css';

export default function Home() {
  return (
      <div className="w-full flex flex-col gap-6" >
        {mockPosts.map(post => (<PostDefault key={post.content} post={post}/>))}
        <PostPagination />
      </div>
  );
}
