import { IUser } from "@/entities/user";

export interface IPost {
  id: string;
  title: string;
  content: string;
  created_at: string;
  owner?: IUser;
  owner_id?: string;
  attachments: [];
}
