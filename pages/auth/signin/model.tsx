import { authModel } from "@/entities/auth";
import { sample } from "effector";
import { createForm } from "effector-forms";

export const $form = createForm({
  fields: {
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
  },
});

sample({
  clock: $form.submit,
  source: { valid: $form.$isValid, values: $form.$values },
  filter: ({ valid }) => valid,
  fn: ({ values }) => ({ ...values }),
  target: authModel.signInFx,
});
