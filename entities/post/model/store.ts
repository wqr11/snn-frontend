import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { Toast } from "toastify-react-native";
import { CreatePostParams, PostApi } from "../api";
import { IPost } from "./types";

export const getPostsFx = createEffect(async (page: number) => {
  const data = await PostApi.list(page);
  return data;
});

export const createPostFx = createEffect(async (params: CreatePostParams) => {
  const data = await PostApi.create(params);
  return data;
});

export const $posts = createStore<IPost[]>([]).on(
  getPostsFx.doneData,
  (state, data) => [...state, ...(data.posts ?? [])]
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
  clock: incrementPage,
  target: getPosts,
});

sample({
  clock: createPostFx.doneData,
  fn: () => Toast.success("Пост создан", "top"),
});

sample({
  clock: createPostFx.failData,
  fn: (d) => Toast.error(`Ошибка при создании: ${d.message}`, "top"),
});

export * from "./types";
