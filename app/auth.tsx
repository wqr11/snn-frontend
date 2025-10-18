import { authModel } from "@/entities/auth";
import { userModel } from "@/entities/user";
import { SignInPageUI } from "@/pages/auth/signin";
import { SignUpPageUI } from "@/pages/auth/signup";
import { useUnit } from "effector-react";
import { router } from "expo-router";

const AuthPage = () => {
  const authModalType = useUnit(authModel.$authModalType);
  const isAuth = useUnit(userModel.$isAuth);

  if (isAuth) {
    router.replace("/");
  }

  if (authModalType === "signup") {
    return <SignUpPageUI />;
  }
  return <SignInPageUI />;
};

export default AuthPage;
