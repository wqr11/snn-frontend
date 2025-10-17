import { Pressable } from "react-native";
import { styled } from "styled-components/native";

export interface ButtonProps {
  $rippleColor?: string;
  $styles?: string;
}

export const Button = styled(Pressable).attrs<ButtonProps>(
  ({ $rippleColor, theme }) => ({
    android_ripple: {
      color: $rippleColor ?? theme.foreground,
      foreground: true,
    },
  })
)`
  overflow: hidden;
  padding: 10px 14px;
  ${({ $styles }) => $styles};
`;
