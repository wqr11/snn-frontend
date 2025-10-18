import { InitGate } from "@/entities/init";
import { LOCAL_SAVED_KEYS } from "@/shared/config";
import { combine, createEffect, createStore, sample } from "effector";
import { AuthApi, SignInParams } from "..";

export const getAccessFromLocalFx = createEffect(() => {
  const access_token = localStorage.getItem(LOCAL_SAVED_KEYS.ACCESS_TOKEN);

  return access_token ?? null;
});

export const signInFx = createEffect<SignInParams, any, Error>(
  async (params) => {
    const data = AuthApi.signIn(params);
    return data;
  }
);

export const $accessToken = createStore<string | null>(null)
  .on(signInFx.doneData, (_, data) => data)
  .on(getAccessFromLocalFx.doneData, (_, data) => data);

export const $isAuth = combine($accessToken, (token) => !!token);

export const $isAuthChecked = createStore(false).on(
  getAccessFromLocalFx.finally,
  () => true
);

signInFx.watch((d) => console.log("ASdASd"));

sample({
  clock: InitGate.open,
  target: getAccessFromLocalFx,
});
