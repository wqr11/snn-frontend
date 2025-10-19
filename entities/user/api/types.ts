export interface IUser {
  id: string;
  email: string;
  is_group: false;
  name?: string;
  age: number;
  description: string;
  main_tag: string;
  additional_tags: string[];
  avatar_url: null;
  subscriptions_count: number;
  company_name?: string;
}
