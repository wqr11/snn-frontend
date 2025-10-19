import { Typography } from "@/components";
import { Button } from "@/components/button";
import { FontAwesome6 } from "@expo/vector-icons";
import { ButtonProps, StyleSheet, TextInput, View } from "react-native";
import { styled } from "styled-components/native";

export const PostShortcutStyled = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
  border-color: ${({ theme }) => theme.grayScale.gray2};
`;

export const PostShortcutMain = styled(View)`
  display: flex;
  gap: 12px;
  flex-direction: row;
`;

export const PostShortcutField = styled(TextInput).attrs({
  multiline: true,
})`
  flex: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.foreground};
`;

export const PostShortcutBottom = styled(View)`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: row;
  margin-left: auto;
`;

export const PostShortcutAttachmentButton = styled(Button).attrs({
  children: <FontAwesome6 name="paperclip" size={20} />,
})`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.grayScale.gray2};
`;

const styles = StyleSheet.create({
  bold: {
    fontSize: 20,
  },
});

export interface PostShortcutSendButton extends Omit<ButtonProps, "children"> {
  children: React.ReactNode;
}

export const PostShortcutSendButton = styled(Button).attrs(
  ({ theme, children }) => ({
    children: (
      <>
        <Typography
          $variant="semibold"
          $color={theme.background}
          style={styles.bold}
        >
          {children}
        </Typography>
      </>
    ),
  })
)`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 14px 28px;
  border-radius: 34px;
  background-color: ${({ theme }) => theme.accent.primary};
`;

export const AttachedFilesContainer = styled.View`
  margin-top: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
  padding-horizontal: 16px;
`;

export const FilePreview = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.grayScale.gray2};
  padding: 8px 12px;
  border-radius: 8px;
  gap: 8px;
`;

export const FileName = styled(Typography)`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  max-width: 120px;
`;

export const RemoveFileButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.grayScale.gray4};
  align-items: center;
  justify-content: center;
`;

export const RemoveIcon = styled(Typography)`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  line-height: 14px;
`;
