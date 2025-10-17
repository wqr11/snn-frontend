import { Typography } from "@/shared/components";
import { Image } from "expo-image";
import { View } from "react-native";
import { styled } from "styled-components/native";

export const PostStyled = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.white};
  border-color: ${({ theme }) => theme.grayScale.gray2};
`;

export const PostHeader = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const PostAvatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.grayScale.gray2};
`;

export const PostHeaderTexts = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const PostHeaderUsername = styled(Typography).attrs({
  $variant: "body-regular",
})``;

export const PostHeaderUserRole = styled(Typography).attrs({
  $variant: "body-thin",
})``;

export const PostDescription = styled(Typography).attrs({
  $variant: "body-regular",
})``;
