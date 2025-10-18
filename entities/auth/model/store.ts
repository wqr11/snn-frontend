import { LOCAL_SAVED_KEYS } from "@/shared/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createEffect, createEvent, createStore, sample } from "effector";
import {
  AuthApi,
  SignInParams,
  SignInResult,
  SignUpParams,
  SignUpResult,
} from "../api";

export const getAccessFromLocalFx = createEffect(async () => {
  const access_token = await AsyncStorage.getItem(
    LOCAL_SAVED_KEYS.ACCESS_TOKEN
  );
  const refresh_token = await AsyncStorage.getItem(
    LOCAL_SAVED_KEYS.ACCESS_TOKEN
  );

  return {
    access_token,
    refresh_token,
  };
});

export const setAccessToLocalFx = createEffect(
  async ({
    access_token,
    refresh_token,
  }: {
    access_token: string;
    refresh_token: string;
  }) => {
    await AsyncStorage.setItem(LOCAL_SAVED_KEYS.ACCESS_TOKEN, access_token);
    await AsyncStorage.setItem(LOCAL_SAVED_KEYS.REFRESH_TOKEN, refresh_token);
  }
);

export const signInFx = createEffect<SignInParams, SignInResult, Error>(
  async (params) => {
    const data = await AuthApi.signIn(params);
    return data;
  }
);

export const signUpFx = createEffect<SignUpParams, SignUpResult, Error>(
  async (params) => {
    const data = await AuthApi.signUp(params);
    return data;
  }
);

export const refreshFx = createEffect(async () => {
  return await AuthApi.refresh();
});

export const $tokens = createStore<{
  access_token: string | null;
  refresh_token?: string | null;
} | null>(null)
  .on(refreshFx.doneData, (_, data) => data)
  .on(signInFx.doneData, (_, data) => data)
  .on(getAccessFromLocalFx.doneData, (_, data) => data);

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

sample({
  clock: signUpFx.doneData,
});
