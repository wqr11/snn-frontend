import { LOCAL_SAVED_KEYS } from "@/shared/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { AuthApi, SignInParams, SignUpParams } from "..";

export const getAccessFromLocalFx = createEffect(async () => {
  const data: { access_token: string; refresh_token: string } = JSON.parse(
    (await AsyncStorage.getItem(LOCAL_SAVED_KEYS.ACCESS_TOKEN)) ?? "{}"
  );

  if (!data.access_token || !data.refresh_token) return null;

  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
  };
});

export const setAccessToLocalFx = createEffect(
  async (access: string | null) => {
    if (!access) return;
    await AsyncStorage.setItem(LOCAL_SAVED_KEYS.ACCESS_TOKEN, access);
    return access;
  }
);

export const signInFx = createEffect<SignInParams, any, Error>(
  async (params) => {
    const data = await AuthApi.signIn(params);
    return data;
  }
);

export const signUpFx = createEffect<SignUpParams, any, Error>(
  async (params) => {
    const data = await AuthApi.signUp(params);
    return data;
  }
);

export const $tokens = createStore<{
  access_token: string;
  refresh_token: string;
} | null>(null)
  .on(signInFx.doneData, (_, data) => data)
  .on(getAccessFromLocalFx.doneData, (_, data) => data);

export const $isAuth = combine($tokens, (token) => !!token);

export const $isAuthChecked = createStore(false).on(
  getAccessFromLocalFx.finally,
  () => true
);

export const toggleAuthModalType = createEvent();
export const $authModalType = createStore<"signin" | "signup">("signin").on(
  toggleAuthModalType,
  (state) => (state === "signin" ? "signup" : "signin")
);

sample({
  source: signInFx.doneData,
  target: setAccessToLocalFx,
});
