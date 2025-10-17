import { Text } from "react-native";
import { css, styled } from "styled-components/native";

export interface TypographyProps {
  $variant?: "body-regular" | "body-semibold" | "body-thin" | "h1";
  $color?: string;
}

export const Typography = styled(Text)<TypographyProps>`
  font-family: Commissioner;
  color: ${({ theme, $color }) => $color ?? theme.foreground};
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "h1":
        return css`
          font-size: 36px;
          font-weight: 700;
          line-height: 42px;
        `;
      case "body-semibold":
        return css`
          font-size: 16px;
          font-height: 22px;
          font-weight: 700;
        `;
      case "body-thin":
        return css`
          font-size: 16px;
          font-height: 22px;
          font-weight: 400;
          color: ${theme.grayScale.gray1};
        `;
      default:
      case "body-regular":
        return css`
          font-size: 16px;
          font-height: 22px;
          font-weight: 500;
        `;
    }
  }}
`;
