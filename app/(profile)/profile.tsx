import { InitGate } from "@/entities/init";
import { userModel } from "@/entities/user";
import { $profilePosts, ProfilePageGate } from "@/features/profile";
import { ProfilePageUI } from "@/pages/profile";
import { useGate, useUnit } from "effector-react";

export default function Index() {
  useGate(InitGate);
  useGate(ProfilePageGate);

  const user = useUnit(userModel.$user);
  const posts = useUnit($profilePosts);

  return <ProfilePageUI posts={posts} user={user} />;
}
