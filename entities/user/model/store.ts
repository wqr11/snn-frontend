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

// УБРАТЬ ЭТУ ХУЙНЮ !!!
export const $isAuth = combine(
  $user,
  authModel.$tokens,
  (user, tokens) => !!tokens?.access_token || !!user
);

sample({
  clock: [
    authModel.signInFx.doneData,
    authModel.signUpFx.doneData,
    authModel.refreshFx.doneData,
  ],
  target: getMeFx,
});

sample({
  clock: getMeFx.failData,
  target: authModel.refreshFx,
});
