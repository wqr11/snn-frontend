import { ScrollView, Text } from "react-native";

import { Button } from "@/components/button";
import { Post } from "@/entities/post";
import { PostShortcut } from "@/features/post-shortcut";
import { router } from "expo-router";

export const MainPageUI = () => {
  return (
    <ScrollView>
      <PostShortcut />
      <Button onTouchStart={() => router.replace("/sign-in")}>
        <Text>HII</Text>
      </Button>
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
      <Post $desc="asd" $username="asda" $role="se" />
    </ScrollView>
  );
};
