import { Typography } from "@/components";
import { Button } from "@/components/button";
import { View } from "react-native";
import { styled } from "styled-components/native";

export const SignInPageStyled = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 22px;
`;

export const SignInPageTitle = styled(Typography).attrs({
  $variant: "h1",
})``;

export const SignInButton = styled(Button)`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.accent.primaryLight};
  border-radius: 12px;
`;
