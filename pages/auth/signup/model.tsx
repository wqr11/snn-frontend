import { authModel } from "@/entities/auth";
import { sample } from "effector";
import { createForm } from "effector-forms";

export const $form = createForm({
  fields: {
    is_group: {
      init: false,
    },
    name: {
      init: "",
      rules: [
        {
          name: "required",
          validator: (val) => !!val,
          errorText: "Имя обязательно",
        },
      ],
    },
    email: {
      init: "",
      rules: [
        {
          name: "required",
          validator: (val) => !!val,
          errorText: "E-mail обязателен",
        },
        {
          name: "email",
          validator: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
          errorText: "E-mail невалидный",
        },
      ],
    },
    password: {
      init: "",
      rules: [
        {
          name: "required",
          validator: (val) => !!val,
          errorText: "Пароль обязателен",
        },
      ],
    },
    confirmPassword: {
      init: "",
      rules: [
        {
          name: "required",
          validator: (val) => !!val,
          errorText: "Пароль обязателен",
        },
      ],
    },
  },
});

sample({
  clock: $form.submit,
  source: { valid: $form.$isValid, values: $form.$values },
  filter: ({ valid, values }) =>
    valid && (values.password === values.confirmPassword || true),
  fn: ({ values }) => ({ ...values, confirmPassword: undefined }),
  target: authModel.signUpFx,
});
