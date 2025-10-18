import { ScrollView, Text } from "react-native";

import { Button } from "@/components/button";
import { Post, postModel } from "@/entities/post";
import { PostShortcut } from "@/features/post-shortcut";
import { useUnit } from "effector-react";
import { Stack, router } from "expo-router";

export const MainPageUI = () => {
  const [posts, incrementPage] = useUnit([
    postModel.$posts,
    postModel.incrementPage,
  ]);

  const redirect = () => router.replace("/auth");

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: "feed",
        }}
      />
      <PostShortcut />
      <Button onTouchStart={redirect}>
        <Text>Логин</Text>
      </Button>
      <Button onTouchStart={redirect}>
        <Text>Регистрация</Text>
      </Button>
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
