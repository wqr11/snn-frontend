import { ScrollView } from "react-native";

import { Post, postModel } from "@/entities/post";
import { AuthRedirect } from "@/features/auth-redirect";
import { PostShortcut } from "@/features/post-shortcut";
import { STORAGE_BASE_URL } from "@/shared/config";
import { useUnit } from "effector-react";
import { Stack } from "expo-router";

export const MainPageUI = () => {
  const [posts, incrementPage] = useUnit([
    postModel.$posts,
    postModel.incrementPage,
  ]);

  return (
    <ScrollView overScrollMode="always">
      <AuthRedirect />
      <Stack.Screen
        options={{
          title: "feed",
        }}
      />
      <PostShortcut />
      {posts.map((post) => (
        <Post
          key={post.id}
          $username={post.owner.name}
          $avatar={`${STORAGE_BASE_URL}/${post.owner.avatar_url}`}
          $desc={post.content}
          $role={post.owner.main_tag}
          $attachments={post.attachments}
        />
      ))}
    </ScrollView>
  );
};
