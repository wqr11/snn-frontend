import { ScrollView } from "react-native";

import { Post, postModel } from "@/entities/post";
import { AuthRedirect } from "@/features/auth-redirect";
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
          $username={post.owner?.name ?? post.owner?.company_name}
          $avatar={post.owner?.avatar_url}
          $desc={post.content}
          $role={post.owner?.main_tag}
          $attachments={post.attachments}
        />
      ))}
    </ScrollView>
  );
};
