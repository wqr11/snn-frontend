import { InitGate } from "@/entities/init";
import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { PostApi } from "../api";
import { IPost } from "./types";

export const getPostsFx = createEffect(async (page: number) => {
  const data = await PostApi.list(page);
  return data;
});

export const $posts = createStore<IPost[]>([]).on(
  getPostsFx.doneData,
  (state, data) => [state, ...(data?.posts ?? [])]
);

export const incrementPage = createEvent<void>();
export const $page = createStore<number>(1).on(
  incrementPage,
  (state) => state + 1
);

export const getPosts = attach({
  source: $page,
  effect: getPostsFx,
});

sample({
  clock: [incrementPage, InitGate.open],
  target: getPosts,
});

export * from "./types";
