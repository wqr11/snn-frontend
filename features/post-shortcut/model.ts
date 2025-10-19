import { postModel } from "@/entities/post";
import { sample } from "effector";
import { createForm } from "effector-forms";

export const $form = createForm<{
  file: File | null;
  content: string;
}>({
  fields: {
    file: {
      init: null,
    },
    content: {
      init: "",
      rules: [
        {
          name: "required",
          validator: (val) => !!val,
          errorText: "Содержимое поста не должно быть пустым",
        },
      ],
    },
  },
});

sample({
  clock: $form.submit,
  source: { valid: $form.$isValid, values: $form.$values },
  filter: ({ valid }) => valid,
  fn: ({ values }) => {
    console.log(values);
    return values;
  },
  target: postModel.createPostFx,
});
