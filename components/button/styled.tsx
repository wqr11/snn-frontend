import { Pressable, PressableProps } from "react-native";
import { styled } from "styled-components/native";

export interface ButtonProps extends PressableProps {
  $rippleColor?: string;
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
`;
