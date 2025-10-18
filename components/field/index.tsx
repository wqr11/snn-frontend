import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { styled } from "styled-components/native";
import { Typography } from "../typography/styled";

interface FieldStyledProps {
  $hasError?: boolean;
}

export interface FieldProps extends TextInputProps {
  error?: string;
}

const FieldWrapper = styled(View)`
  gap: 8px;
`;

const FieldInput = styled(TextInput)<FieldStyledProps>`
  padding: 18px;
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? "#FF3B30" : theme.grayScale.gray2)};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.background};
  &::placeholder {
    color: ${({ theme }) => theme.grayScale.gray1};
  }
`;

const ErrorText = styled(Typography)`
  padding-left: 4px;
`;

export const Field: React.FC<FieldProps> = ({ error, ...props }) => {
  return (
    <FieldWrapper>
      <FieldInput $hasError={!!error} {...props} />
      {error && (
        <ErrorText $variant="thin" $color="#FF3B30">
          {error}
        </ErrorText>
      )}
    </FieldWrapper>
  );
};
