import { Typography } from "@/components";
import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";
import { styled } from "styled-components/native";

export const NotificationStyled = styled(View)`
  width: 160px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 1px solid ${({ theme }) => theme.grayScale.gray2};
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
`;

export const NotificationIcon = styled(FontAwesome6).attrs({
  name: "circle-info",
  size: 20,
})``;

export const NotificationText = styled(Typography).attrs({
  $variant: "semibold",
  $size: 18,
})``;
