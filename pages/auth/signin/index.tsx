import { Typography } from "@/components";
import { BackButton } from "@/components/back-button";
import { Field } from "@/components/field";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import { $form } from "./model";
import * as S from "./styled";

const styles = StyleSheet.create({
  signInText: {
    marginInline: "auto",
  },
});

export const SignInPageUI = () => {
  const theme = useTheme();

  const handlers = $form.$handlers;
  const fields = useUnit($form.$fields);

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <S.SignInPageStyled>
      <BackButton />
      <S.SignInPageTitle>Hello bitch!</S.SignInPageTitle>
      <Field placeholder="Email" onChangeText={handlers.email} />
      <Field placeholder="Password" onChangeText={handlers.password} />
      <S.SignInButton>
        <Typography $variant="body-semibold" style={styles.signInText}>
          Submit
        </Typography>
      </S.SignInButton>
    </S.SignInPageStyled>
  );
};
