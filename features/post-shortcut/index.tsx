import { StyleSheet } from 'react-native'
import * as S from './styled'

const styles = StyleSheet.create({
  post: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export const PostShortcut = () => {
  return (
    <S.PostShortcutStyled style={styles.post}>
      <S.PostShortcutMain>
        <S.PostShortcutAttachmentButton />
        <S.PostShortcutField placeholder="Как прошёл ваш день?" />
      </S.PostShortcutMain>
      <S.PostShortcutBottom>
        <S.PostShortcutSendButton>Отправить</S.PostShortcutSendButton>
      </S.PostShortcutBottom>
    </S.PostShortcutStyled>
  );
};
