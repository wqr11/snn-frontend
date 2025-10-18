import React, { useEffect, useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { styled } from "styled-components/native";

const { width, height } = Dimensions.get("window");

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const RightSlidePanel = ({ isOpen, children }: IProps) => {
  const translateX = useRef(new Animated.Value(width)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: isOpen ? 0 : width,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: isOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isOpen]);

  const panelStyle = {
    transform: [{ translateX }],
  };

  return <AnimatedContainer style={panelStyle}>{children}</AnimatedContainer>;
};

const Container = styled.View`
  padding-top: 42px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.background};
  width: ${width}px;
  height: ${height}px;
  z-index: 5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
