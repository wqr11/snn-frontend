import { FontAwesome6 } from "@expo/vector-icons";
import { styled } from "styled-components/native";
import { Button } from "../button";

export const BackButton = styled(Button).attrs({
  children: <FontAwesome6 name="arrow-left" size={20} />,
})`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.grayScale.gray2};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background};
`;
