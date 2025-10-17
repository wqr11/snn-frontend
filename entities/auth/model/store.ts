import { createEffect } from "effector";
import { AuthApi, SignInParams } from "..";

export const signInFx = createEffect<SignInParams, any, Error>(
  async (params) => {
    const data = AuthApi.signIn(params);
    return data;
  }
);
