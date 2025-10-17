import { Text } from "react-native";
import { css, styled } from "styled-components/native";

export interface TypographyProps {
  $variant?: "body-regular" | "body-semibold" | "body-thin";
}

export const Typography = styled(Text)<TypographyProps>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "body-semibold":
        return css`
          font-size: 16px;
          font-height: 22px;
          font-weight: 700;
          color: ${theme.grayScale.gray1};
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
          color: ${theme.black};
        `;
    }
  }}
`;
