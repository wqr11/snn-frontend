import { BackButton } from "@/components/back-button";
import { useForm } from "effector-forms";
import { useTheme } from "styled-components/native";
import { $form } from "./model";
import * as S from "./styled";

import { Typography } from "@/components";
import { AdditionalDataPostModal } from "@/components/additional-data-post-modal/AdditionalDataPostModal";
import { Field } from "@/components/field";
import { authModel } from "@/entities/auth";
import { userModel } from "@/entities/user";
import { useUnit } from "effector-react";
import { Stack, useRouter } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

export const SignInPageUI = () => {
  const theme = useTheme();
  const router = useRouter();

  const isAuth = useUnit(userModel.$isAuth);
  const isPending = useUnit(authModel.signInFx.pending);
  const form = useForm($form);

  const toggleAuthType = useUnit(authModel.toggleAuthModalType);

  const styles = StyleSheet.create({
    title: {
      marginTop: !isAuth ? 40 : 0,
      marginBottom: 20,
    },
    centerText: {
      marginInline: "auto",
    },
  });

  return (
    <ScrollView overScrollMode="always">
      <AdditionalDataPostModal />
      <S.SignInPageStyled>
        <Stack.Screen
          options={{
            title: "sign-in",
          }}
        />
        {isAuth && <BackButton onPress={() => router.push("/")} />}
        <S.SignInPageTitle style={styles.title}>Логин</S.SignInPageTitle>
        <Field
          error={form.fields.email.errors?.[0]?.errorText}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={form.fields.email.onChange}
        />
        <Field
          error={form.fields.password.errors?.[0]?.errorText}
          placeholder="Password"
          secureTextEntry
          onChangeText={form.fields.password.onChange}
        />
        <S.SignInButton
          $rippleColor={theme.background}
          onPress={() => form.submit()}
        >
          <Typography $variant="semibold" $color={theme.background}>
            Войти
          </Typography>
        </S.SignInButton>
        <S.SignInLink
          $rippleColor={theme.background}
          onPress={toggleAuthType}
          disabled={isPending}
        >
          <Typography
            $variant="semibold"
            $color={theme.foreground}
            style={styles.centerText}
          >
            Зарегистрироваться
          </Typography>
        </S.SignInLink>
      </S.SignInPageStyled>
    </ScrollView>
  );
};
