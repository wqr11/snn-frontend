import { BackButton } from "@/components/back-button";
import { useForm } from "effector-forms";
import { useTheme } from "styled-components/native";
import { $form } from "./model";
import * as S from "./styled";

import { Typography } from "@/components";
import { AvatarFile } from "@/components/avatar-file";
import { Field } from "@/components/field";
import { Switch } from "@/components/switch";
import { authModel } from "@/entities/auth";
import { userModel } from "@/entities/user";
import { useUnit } from "effector-react";
import { Stack, router } from "expo-router";
import { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";

export const SignUpPageUI = () => {
  const theme = useTheme();

  const isAuth = useUnit(userModel.$isAuth);
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

  const handleAvatarSelect = (file: File | null) => {
    form.fields.avatar.onChange(file);
  };

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
          keyboardType="email-address"
          onChangeText={form.fields.email.onChange}
        />
        <Field
          error={form.fields.main_tag.errors?.[0]?.errorText}
          placeholder="Специальность"
          keyboardType="default"
          onChangeText={form.fields.main_tag.onChange}
        />
        <Field
          error={form.fields.additional_tags.errors?.[0]?.errorText}
          placeholder="Дополнительные навыки"
          keyboardType="default"
          onChangeText={form.fields.additional_tags.onChange}
        />
        <Field
          error={form.fields.description.errors?.[0]?.errorText}
          placeholder="Описание"
          keyboardType="default"
          onChangeText={form.fields.description.onChange}
        />
        <AvatarFile
          error={form.fields.avatar?.errors?.[0]?.errorText}
          onFileSelect={handleAvatarSelect}
          placeholder="Выберите аватар"
        />
        <Field
          error={form.fields.password.errors?.[0]?.errorText}
          placeholder="Пароль"
          secureTextEntry
          onChangeText={form.fields.password.onChange}
        />
        <Field
          error={form.fields.confirmPassword.errors?.[0]?.errorText}
          placeholder="Подтвердите пароль"
          secureTextEntry
          onChangeText={form.fields.confirmPassword.onChange}
        />
        <S.SignUpButton
          $rippleColor={theme.background}
          onPress={() => form.submit()}
        >
          <Typography $variant="semibold" $color={theme.background}>
            Зарегистрироваться
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
