export interface Post {
  id: string,
  uuid: string,
  slug: string,
  title: string
  html: string, // html string
  feature_image: string
  visibility: boolean,
  created_at: string,
  updated_at: string,
  published_at: string,
  excerpt: string,
  custom_excerpt?: string,
  reading_time: number

  // expected field
  type?: 'social' | 'default';
  user?: string;
  org?: string;
  isLiked?: boolean;
  isBookmarked?: boolean;
  likeCount?: number;
  commentCount?: number;
  shareCount?: number;

  // title: string;
  // content: string;
  // createdAt: string;
  // image?: string[];
}

export interface MetaData {
  pagination?: Pagination
}

export interface Pagination {
  page: number,
  limit: number,
  pages: number,
  total: number,
  next: number | null,
  prev: number | null,
}

/*
{
id: string,
uuid: string,
title: string,
slug: string,
html: html string,
feature_image: string
visibility: boolean,
created_at: string,
updated_at: string,
published_at: string,
excerpt: string,
reading_time: number
}
 */
