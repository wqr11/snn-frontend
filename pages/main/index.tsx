import { ScrollView } from "react-native";

import { Post, postModel } from "@/entities/post";
import { PostShortcut } from "@/features/post-shortcut";
import { useUnit } from "effector-react";
import { Stack } from "expo-router";

export const MainPageUI = () => {
  const [posts, incrementPage] = useUnit([
    postModel.$posts,
    postModel.incrementPage,
  ]);

  return (
    <ScrollView overScrollMode="always">
      <Stack.Screen
        options={{
          title: "feed",
        }}
      />
      <PostShortcut />
      {posts.map((post) => (
        <Post
          key={post.id}
          $username={post.owner_id}
          $desc={post.content}
          $role={post.title}
        />
      ))}
    </ScrollView>
  );
};
