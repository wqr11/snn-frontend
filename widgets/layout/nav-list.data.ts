import { IconType } from "@/components";

type NavItemType = {
  icon: IconType;
  title: string;
  link: string;
};

export const navList: NavItemType[] = [
  {
    icon: "book",
    title: "Лента",
    link: "/",
  },
  {
    icon: "user",
    title: "Профиль",
    link: "/profile",
  },
  {
    icon: "users",
    title: "Группы",
    link: "/groups",
  },
];
