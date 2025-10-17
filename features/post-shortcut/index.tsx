import { StyleSheet } from "react-native";
import * as S from "./styled";

const styles = StyleSheet.create({
  post: {
    borderBottomWidth: 1,
  },
});

export const PostShortcut = () => {
  return (
    <S.PostShortcutStyled style={styles.post}>
      <S.PostShortcutMain>
        <S.PostShortcutAttachmentButton />
        <S.PostShortcutField placeholder="asdlkjsad" />
      </S.PostShortcutMain>
      <S.PostShortcutBottom>
        <S.PostShortcutSendButton>asda</S.PostShortcutSendButton>
      </S.PostShortcutBottom>
    </S.PostShortcutStyled>
  );
};
