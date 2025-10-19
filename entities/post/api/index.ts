import { $authHost } from "@/entities/auth";
import { CreatePostParams, CreatePostResult, ListPostsResult } from "./types";

export class PostApi {
  static async list(page: number, userId?: string): Promise<ListPostsResult> {
    const offset = (page - 1) * 20;
    const limit = 20;

    return await $authHost(
      `/posts${userId ? `/${userId}/` : ""}?offset=${offset}&limit=${limit}`
    );
  }

  static async create({
    content,
    file,
    title = "THIS IS USELESS TITLE",
  }: CreatePostParams): Promise<CreatePostResult> {
    const data = new FormData();

    data.append("title", title);
    data.append("content", content);
    if (file) {
      data.append("file", file);
    }

    return await $authHost(
      "/create-post",
      {
        method: "POST",
        body: data,
      },
      false
    );
  }
}

export * from "./types";
