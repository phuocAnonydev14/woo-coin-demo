import HttpService from '@/services/http.service';
import axios from 'axios';
import { BASE_URL } from '@/const/env-keys';
import { MetaData, Post } from '@/types/app.type';
import moment from 'moment';
import { deleteCookie } from 'cookies-next';

interface LoginParams {
  username: string;
  password: string;
}

class AdminService extends HttpService {
  constructor() {
    super();
  }
  async login(params: LoginParams) {
    return axios.post(`/api/login`, params);
  }

  async logout() {
    deleteCookie('access_token');
    return axios.delete(`${BASE_URL}/admin/session`);
  }

  async publishPost(id: string, updated_at: string) {
    return this.update(`/admin/posts/${id}`, {
      posts: [
        {
          status: 'published',
          published_at: moment.utc(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
          updated_at: updated_at,
        },
      ],
    });
  }

  async updateExpertTag(id: string, updated_at: string, currentTag: string, isAdd: boolean) {
    const tags = [
      {
        name: currentTag,
      },
    ];

    if (isAdd)
      tags.push({
        name: 'expert',
      });

    return this.update(`/admin/posts/${id}`, {
      posts: [
        {
          tags,
          updated_at: updated_at,
        },
      ],
    });
  }

  async getAllPosts(page: number, limit?: number, params?: Record<string, string>) {
    return this.get<{ posts: Post[]; meta: MetaData }>(
      `/admin/posts`,
      {
        page,
        limit: 500,
        include: 'tags',
        order: 'published_at DESC',
        filter: `status:draft+tags:news`,
        formats: 'html',
        ...params,
      },
      false,
    );
  }
}

export const adminService = new AdminService();
