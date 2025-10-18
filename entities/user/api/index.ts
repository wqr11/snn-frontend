import { $authHost } from "@/entities/auth";
import { IUser } from "./types";

export class UserApi {
  static async getMe(): Promise<IUser> {
    return await $authHost("/me");
  }
}

export * from "./types";
