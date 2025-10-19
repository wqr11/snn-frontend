import { authModel } from "@/entities/auth";
import { combine, createEffect, createStore, sample } from "effector";
import { IUser, UserApi } from "../api";

export const getMeFx = createEffect(async () => {
  return await UserApi.getMe();
});

export const $user = createStore<IUser | null>(null).on(
  getMeFx.doneData,
  (_, data) => data
);

export const $isAuth = combine($user, authModel.$tokens, (user) => !!user);

sample({
  clock: [authModel.$tokens],
  target: getMeFx,
});

sample({
  clock: getMeFx.failData,
  target: authModel.refreshFx,
});
