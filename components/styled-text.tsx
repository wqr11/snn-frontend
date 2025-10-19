import React, { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { styled } from "styled-components/native";
import { Typography } from ".";

interface IProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const StyledText = ({ children, style }: IProps) => {
  return <StyleText style={style}>{children}</StyleText>;
};

const StyleText = styled(Typography).attrs(({ theme }) => ({
  $variant: "semibold",
  $color: theme.accent.primary,
}))``;
