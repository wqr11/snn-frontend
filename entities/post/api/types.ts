import { IPost } from "..";

export interface ListPostsResult {
  posts: IPost[];
  next_offset: number;
}

export interface CreatePostParams {
  title?: string;
  content: string;
  file?: File;
}

export interface CreatePostResult {
  post_id: string;
  title: string;
  content: string;
  attachment_url: null;
}
