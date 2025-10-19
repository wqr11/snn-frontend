import { authModel } from "@/entities/auth";
import { sample } from "effector";
import { createForm } from "effector-forms";

export const $form = createForm<{
  is_group: boolean;
  avatar: File | null;
  name: string;
  email: string;
  main_tag: string;
  additional_tags: string;
  description: string;
  password: string;
  confirmPassword: string;
}>({
  fields: {
    is_group: {
      init: false,
    },
    avatar: {
      init: null,
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
    main_tag: {
      init: "",
      rules: [
        {
          name: "required",
          validator: (val) => !!val,
          errorText: "Специальность обязательна",
        },
      ],
    },
    additional_tags: {
      init: "",
    },
    description: {
      init: "",
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
          errorText: "Подтвердите пароль",
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
  fn: ({ values }) => ({
    ...values,
    additional_tags: values.additional_tags
      .replaceAll(", ", ",")
      .replaceAll(" ,", ",")
      .split(","),
    confirmPassword: undefined,
  }),
  target: authModel.signUpFx,
});
