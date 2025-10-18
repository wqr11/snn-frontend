import { API_BASE_URL } from "@/shared/config";
import {
  SignInParams,
  SignInResult,
  SignUpParams,
  SignUpResult,
} from "./types";

export class AuthApi {
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
