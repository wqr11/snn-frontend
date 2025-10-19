import { IPost, PostApi } from "@/entities/post";
import { IUser } from "@/entities/user";
import { createEffect, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { GroupApi } from "./api";

export const GroupSlugGate = createGate<string>();

export const getGroupDataFx = createEffect(async (id: string) => {
  return await GroupApi.getGroup(id);
});

export const getGroupPostsFx = createEffect(async (id: string) => {
  return await PostApi.list(1, id);
});

export const $groupId = createStore<string | null>(null).on(
  GroupSlugGate.open,
  (_, data) => data
);

export const $groupSlugData = createStore<IUser | null>(null).on(
  getGroupDataFx.doneData,
  (_, data) => data
);

export const $groupPosts = createStore<IPost[]>([]).on(
  getGroupPostsFx.doneData,
  (_, data) => data.posts
);

sample({
  clock: GroupSlugGate.open,
  target: [getGroupDataFx, getGroupPostsFx],
});
