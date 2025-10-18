import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  NotificationIcon,
  NotificationStyled,
  NotificationText,
} from "./styled";

export interface NotificationProps {
  children: React.ReactNode;
}

export const Notification = ({ children }: NotificationProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-20);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    });

    translateY.value = withTiming(0, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <NotificationStyled>
        <NotificationIcon />
        <NotificationText>{children}</NotificationText>
      </NotificationStyled>
    </Animated.View>
  );
};
