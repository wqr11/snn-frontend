import { API_BASE_URL, LOCAL_SAVED_KEYS } from "@/shared/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SignInParams,
  SignInResult,
  SignUpParams,
  SignUpResult,
} from "./types";

export class AuthApi {
  static async refresh(): Promise<SignInResult> {
    const refresh = await AsyncStorage.getItem(LOCAL_SAVED_KEYS.REFRESH_TOKEN);

    const res = await fetch(`${API_BASE_URL}/refresh`, {
      method: "POST",
      headers: {
        // Тут смотрит в куки ???
        Authorization: `Bearer ${refresh}`,
      },
    });

    if (!res.ok) {
      throw new Error("Ошибка при рефреше");
    }

    return await res.json();
  }

  static async signIn(params: SignInParams): Promise<SignInResult> {
    const data = await (
      await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    return data;
  }

  static async signUp(params: SignUpParams): Promise<SignUpResult> {
    console.log("SIGNUP");
    const data = await (
      await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        body: JSON.stringify({
          ...(params ?? {}),
          description: "string",
          company_name: "string",
          main_tag: "string",
          additional_tags: ["string"],
          name: "string",
          age: 0,
        }),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    return data;
  }
}

export * from "./host";
export * from "./types";
