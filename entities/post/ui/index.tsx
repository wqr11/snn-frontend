import { StyleSheet } from "react-native";
import * as S from "./styled";

const styles = StyleSheet.create({
  post: {
    borderBottomWidth: 1,
  },
});

export interface PostProps {
  $avatar?: string;
  $username?: string;
  $role?: string;
  $desc?: string;
}

export const Post: React.FC<PostProps> = ({
  $avatar,
  $desc,
  $role,
  $username,
}) => {
  return (
    <S.PostWrapper>
      <S.PostStyled style={styles.post}>
        <S.PostHeader>
          <S.PostAvatar source={$avatar} />
          <S.PostHeaderTexts>
            <S.PostHeaderUsername>{$username}</S.PostHeaderUsername>
            <S.PostHeaderUserRole>{$role}</S.PostHeaderUserRole>
          </S.PostHeaderTexts>
        </S.PostHeader>
        <S.PostDescription>{$desc}</S.PostDescription>
      </S.PostStyled>
    </S.PostWrapper>
  );
};
