import { Typography } from "@/components";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { styled } from "styled-components/native";

export const PostWrapper = styled(Pressable).attrs(({ theme }) => ({
  android_ripple: {
    color: theme.grayScale.gray2,
    foreground: true,
    borderless: false,
  },
}))`
  background-color: ${({ theme }) => theme.background};
  overflow: hidden;
`;

export const PostStyled = styled(View)`
  min-height: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
  border-color: ${({ theme }) => theme.grayScale.gray2};
`;

export const PostHeader = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const PostAvatar = styled(Image)`
  width: 52px;
  height: 52px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grayScale.gray2};
`;

export const PostHeaderTexts = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const PostHeaderUsername = styled(Typography).attrs({
  $variant: "regular",
  $size: 18,
})``;

export const PostHeaderUserRole = styled(Typography).attrs(({ theme }) => ({
  $variant: "thin",
  $color: theme.grayScale.gray1,
}))``;

export const PostDescription = styled(Typography).attrs({
  $variant: "regular",
  $size: 18,
})``;

// New components for attachments
export const AttachmentsContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const ImageAttachmentWrapper = styled(Pressable)`
  width: 100%;
`;

export const ImageAttachment = styled(Image)`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.grayScale.gray2};
`;

export const FileLinkWrapper = styled(Pressable).attrs(({ theme }) => ({
  android_ripple: {
    color: theme.grayScale.gray2,
  },
}))`
  background-color: ${({ theme }) => theme.grayScale.gray3};
  border-color: ${({ theme }) => theme.grayScale.gray2};
`;

export const FileLinkText = styled(Typography).attrs(({ theme }) => ({
  $variant: "regular",
  $color: theme.text,
}))``;
