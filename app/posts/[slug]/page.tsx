import { PostDefault } from '@/components/post';
import {postService} from "@/services/post.service";
const handleFetchPostDetail = async (slug: string) => {
  try{
    const postDetailRes = await postService.getPostDetail(slug)
    if(!postDetailRes) return
    return postDetailRes.posts[0]
  }catch (e) {
    console.log(e)
    return null
  }
}

export default async function PostDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const currentPost = await handleFetchPostDetail(slug);
  if(!currentPost) return

  return (
    <div>
        <PostDefault post={currentPost} isDetailPage />
    </div>
  );
}
