import { API_BASE_URL, LOCAL_SAVED_KEYS } from "@/shared/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignInParams, SignInResult, SignUpParams } from "./types";

export class AuthApi {
  static async refresh(): Promise<SignInResult> {
    const refresh = await AsyncStorage.getItem(LOCAL_SAVED_KEYS.REFRESH_TOKEN);

    const res = await fetch(`${API_BASE_URL}/refresh`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refresh}`,
      },
    });

    if (!res.ok) {
      throw new Error("Ошибка при рефреше");
    }

    return await res.json();
  }

  static async signIn(params: SignInParams): Promise<SignInResult> {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    return data;
  }

  static async signUp(params: SignUpParams): Promise<SignUpParams> {
    const form = new FormData();

    const baseData = {
      description: "string",
      company_name: "string",
      main_tag: "string",
      additional_tags: ["string"],
      name: "string",
      age: 0,
      ...params,
    };

    for (const [key, value] of Object.entries(baseData)) {
      if (value === null || value === undefined) {
        continue;
      }

      if (key === "additional_tags" && Array.isArray(value)) {
        value.forEach((tag, index) => {
          form.append(`${key}[${index}]`, tag.toString());
        });
      } else if (value instanceof File || value instanceof Blob) {
        form.append(key, value);
      } else if (typeof value === "object") {
        form.append(key, JSON.stringify(value));
      } else {
        form.append(key, value.toString());
      }
    }

    console.log("FormData contents:");
    for (const [key, value] of (form as any)._parts || []) {
      console.log(`${key}:`, value);
    }

    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      body: form,
    });

    if (!response.ok) {
      throw new Error(`Ошибка регистрации: ${response.status}`);
    }

    return await response.json();
  }
}

export * from "./host";
export * from "./types";
