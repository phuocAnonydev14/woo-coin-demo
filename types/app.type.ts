export interface Post {
  title: string;
  content: string;
  user: string;
  org: string;
  isLiked: boolean;
  isBookmarked: boolean;
  likeCount: number;
  createdAt: string;
  commentCount: number;
  shareCount: number;
  image?: [string];
  slug: string;
  type: 'social' | 'default';
}
