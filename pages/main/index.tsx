import { ScrollView } from "react-native";

import { Post } from "@/entities/post";
import { PostShortcut } from "@/features/post-shortcut";

export const MainPageUI = () => (
  <ScrollView>
    <PostShortcut />
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
