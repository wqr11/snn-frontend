import { $authHost } from "@/entities/auth";
import { CreatePostParams, CreatePostResult, ListPostsResult } from "./types";

export class PostApi {
  static async list(page: number): Promise<ListPostsResult> {
    const offset = (page - 1) * 20;
    const limit = 20;

    return await $authHost(`/posts?offset=${offset}&limit=${limit}`);
  }

  static async create({
    content,
    file,
    // Useless
    title = "THIS IS USELESS TITLE",
  }: CreatePostParams): Promise<CreatePostResult> {
    const data = new FormData();

    data.set("title", title);
    data.set("content", content);
    if (file) {
      data.set("file", file);
    }

    return await $authHost("/create-post", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export * from "./types";
