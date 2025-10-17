import { TextInput } from "react-native";
import { styled } from "styled-components/native";

export const Field = styled(TextInput)`
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.grayScale.gray2};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background};
  &::placeholder {
    color: ${({ theme }) => theme.grayScale.gray1};
  }
`;
