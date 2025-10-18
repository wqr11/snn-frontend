import { Animated, Pressable, View } from "react-native";
import { styled } from "styled-components/native";

export interface SwitchStyledProps {
  $isActive?: boolean;
}

export const SwitchWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const SwitchContainer = styled(Pressable)<SwitchStyledProps>`
  width: 51px;
  height: 31px;
  border-radius: 16px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.accent.primary : theme.grayScale.gray2};
  padding: 2px;
  justify-content: center;
  transition: background-color 0.3s;
`;

export const SwitchThumb = styled(Animated.View)`
  width: 27px;
  height: 27px;
  border-radius: 13.5px;
  background-color: ${({ theme }) => theme.background};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  elevation: 2;
`;
