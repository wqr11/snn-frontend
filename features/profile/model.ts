import { IPost, PostApi } from "@/entities/post";
import { userModel } from "@/entities/user";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

export const getProfilePosts = createEvent();

export const getProfilePostsFx = createEffect(async (userId: string) => {
  const res = await PostApi.list(1, userId);

  return res.posts;
});

export const $profilePosts = createStore<IPost[]>([]).on(
  getProfilePostsFx.doneData,
  (_, data) => data
);

export const ProfilePageGate = createGate();

sample({
  clock: getProfilePosts,
  source: userModel.$user,
  filter: (user) => !!user,
  fn: (user) => user!.id!,
  target: getProfilePostsFx,
});

sample({
  clock: ProfilePageGate.open,
  target: getProfilePosts,
});
