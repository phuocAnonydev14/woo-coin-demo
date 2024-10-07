import HttpService from '@/services/http.service';
import { MetaData, Post } from '@/types/app.type';

class PostService extends HttpService {
  private PAGE_LIMIT = 8;
  private API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  async getAllPosts(page: number, limit?: number) {
    return this.get<{ posts: Post[]; meta: MetaData }>(
      '/content/posts',
      {
        key: this.API_KEY,
        page,
        limit: limit || this.PAGE_LIMIT,
        include: 'tags',
        order: 'published_at DESC',
        filter: 'tag:news',
      },
      true,
    );
  }

  async getAllPostSocials(page: number, limit?: number) {
    return this.get<{ posts: Post[]; meta: MetaData }>(
      '/content/posts',
      {
        key: this.API_KEY,
        page,
        limit: limit || this.PAGE_LIMIT,
        include: 'tags',
        order: 'published_at DESC',
        filter: 'tag:socials',
      },
      true,
    );
  }

  async getPostDetail(slug: string) {
    return this.get<{ posts: Post[] }>(`/content/posts/slug/${slug}`, { key: this.API_KEY });
  }
}

export const postService = new PostService();
