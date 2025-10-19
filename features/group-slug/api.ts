import { $authHost } from "@/entities/auth";
import { IUser } from "@/entities/user";

export class GroupApi {
  static async getGroup(userId: string): Promise<IUser> {
    const data: Array<IUser> = await $authHost(`/users`);

    return data.find((d) => d.id === userId)!;
  }

  static async getAllGroups(): Promise<{ users: IUser[] }> {
    return await $authHost("/search/users?is_group=true");
  }
}
