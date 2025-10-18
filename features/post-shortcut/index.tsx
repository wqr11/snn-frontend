import { useForm } from "effector-forms";
import { StyleSheet } from "react-native";
import { $form } from "./model";
import * as S from "./styled";

const styles = StyleSheet.create({
  post: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export const PostShortcut = () => {
  const form = useForm($form);

  return (
    <S.PostShortcutStyled style={styles.post}>
      <S.PostShortcutMain>
        <S.PostShortcutAttachmentButton />
        <S.PostShortcutField
          placeholder="Как прошёл ваш день?"
          onChangeText={form.fields.content.onChange}
        />
      </S.PostShortcutMain>
      <S.PostShortcutBottom>
        <S.PostShortcutSendButton onPress={() => form.submit()}>
          Отправить
        </S.PostShortcutSendButton>
      </S.PostShortcutBottom>
    </S.PostShortcutStyled>
  );
};
