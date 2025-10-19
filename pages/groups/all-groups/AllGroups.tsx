import { groupModel } from "@/entities/group";
import { STORAGE_BASE_URL } from "@/shared/config";
import { useUnit } from "effector-react";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import { GroupItem } from "../styled";

export const AllGroups = () => {
  const allGroups = useUnit(groupModel.$allGroups);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingRight: 10,
      }}
    >
      {Array.isArray(allGroups)
        ? allGroups?.map((gr) => (
            <GroupItem
              image={`${STORAGE_BASE_URL}/${gr.avatar_url}`}
              title={gr.name}
              description={gr.description}
              type="company"
              onPress={() => router.push(`/group/${gr.id}`)}
            />
          ))
        : null}
    </ScrollView>
  );
};
