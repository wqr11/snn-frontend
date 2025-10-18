import { BackButton } from "@/components/back-button";
import { useForm } from "effector-forms";
import { useTheme } from "styled-components/native";
import { $form } from "./model";
import * as S from "./styled";

import { Typography } from "@/components";
import { Field } from "@/components/field";
import { Switch } from "@/components/switch";
import { authModel } from "@/entities/auth";
import { useUnit } from "effector-react";
import { Stack, router } from "expo-router";
import { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";

export const SignUpPageUI = () => {
  const theme = useTheme();

  const isAuth = useUnit(authModel.$isAuth);
  const isPending = useUnit(authModel.signUpFx.pending);
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
    right: {
      marginLeft: "auto",
    },
  });

  const handlePress = useCallback(() => {
    router.replace("/");
  }, []);

  return (
    <ScrollView overScrollMode="always">
      <S.SignUpPageStyled>
        <Stack.Screen
          options={{
            title: "sign-up",
          }}
        />
        {isAuth && <BackButton onPress={handlePress} />}
        <S.SignUpPageTitle style={styles.title}>Регистрация</S.SignUpPageTitle>
        <Switch
          label="Аккаунт сообщества"
          value={form.fields.is_group.value}
          onValueChange={form.fields.is_group.onChange}
          style={styles.right}
        />
        <Field
          error={form.fields.name.errors?.[0]?.errorText}
          placeholder="Ваше имя"
          onChangeText={form.fields.name.onChange}
        />
        <Field
          error={form.fields.email.errors?.[0]?.errorText}
          placeholder="Email"
          onChangeText={form.fields.email.onChange}
        />
        <Field
          error={form.fields.password.errors?.[0]?.errorText}
          placeholder="Пароль"
          onChangeText={form.fields.password.onChange}
        />
        <Field
          error={form.fields.confirmPassword.errors?.[0]?.errorText}
          placeholder="Подтвердите пароль"
          onChangeText={form.fields.confirmPassword.onChange}
        />
        <S.SignUpButton
          $rippleColor={theme.background}
          onPress={() => form.submit()}
        >
          <Typography $variant="semibold" $color={theme.background}>
            Зарегаться
          </Typography>
        </S.SignUpButton>
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
            Войти
          </Typography>
        </S.SignInLink>
      </S.SignUpPageStyled>
    </ScrollView>
  );
};
