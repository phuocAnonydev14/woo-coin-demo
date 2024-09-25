import { PostDefault } from '@/components/post';
import {postService} from "@/services/post.service";
import {Metadata, ResolvingMetadata} from "next";
import logo from "@/components/assets/logo.png"

type MetadataProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

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

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const post = await handleFetchPostDetail(slug)
  return {
    title: post?.title || '',
    description: post?.excerpt || '',
    openGraph: {
      images: [logo.src],
    },
    icons: logo.src
  }
}

export default async function PostDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const currentPost = await handleFetchPostDetail(slug);
  if(!currentPost) return

  console.log('currentPost', currentPost.html)

  return (
    <div>
        <PostDefault post={currentPost} isDetailPage />
    </div>
  );
}
