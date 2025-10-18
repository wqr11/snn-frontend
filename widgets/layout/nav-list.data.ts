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
    icon: "house",
    title: "Профиль",
    link: "/",
  },
  {
    icon: "users",
    title: "Группы",
    link: "/",
  },
  {
    icon: "gear",
    title: "Настройки",
    link: "/",
  },
];
