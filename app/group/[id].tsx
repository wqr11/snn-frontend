import { InitGate } from "@/entities/init";
import { groupSlugModel } from "@/features/group-slug";
import { ProfilePageUI } from "@/pages/profile";
import { useGate, useUnit } from "effector-react";
import { useLocalSearchParams } from "expo-router";

export default function Index() {
  const { id } = useLocalSearchParams<{ id: string }>();

  useGate(InitGate);
  useGate(groupSlugModel.GroupSlugGate, id);

  const groupData = useUnit(groupSlugModel.$groupSlugData);
  const groupPosts = useUnit(groupSlugModel.$groupPosts);

  return <ProfilePageUI posts={groupPosts} user={groupData} />;
}
