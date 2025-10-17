import { authModel } from "@/entities/auth";
import { createEvent, sample } from "effector";
import { Form } from "efforms";

export const submit = createEvent();

export interface SignInForm {
  email: string;
  password: string;
}

export const $form = new Form<SignInForm>(
  {
    email: "",
    password: "",
  },
  {
    email: [
      (val) => {
        const test = /[^\s]+@[^\s].[^\s]/gi.test(val);

        if (!test) {
          return {
            valid: false,
            errors: ["Email not valid"],
          };
        }

        return { valid: true };
      },
    ],
    password: [
      (pass) => {
        if (!pass) {
          return {
            valid: false,
            errors: ["Password is invalid"],
          };
        }
        return { valid: true };
      },
    ],
  },
  submit
);

sample({
  clock: submit,
  source: $form.$fields,
  fn: (s) => {
    console.log(s);
    return s;
  },
  target: authModel.signInFx,
});
