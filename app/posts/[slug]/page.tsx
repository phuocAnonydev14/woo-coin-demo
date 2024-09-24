import { PostDefault } from '@/components/post';
import {postService} from "@/services/post.service";
import type { Metadata, ResolvingMetadata } from 'next'
import logo from "@/components/assets/logo.png"

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

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const post = await handleFetchPostDetail(slug)


  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: post?.title || '',
    openGraph: {
      images: [logo.src],
    },
    icons: logo.src
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
