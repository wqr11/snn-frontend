import { authModel } from "@/entities/auth";
import { SignInPageUI } from "@/pages/auth/signin";
import { SignUpPageUI } from "@/pages/auth/signup";
import { useUnit } from "effector-react";

const AuthPage = () => {
  const authModalType = useUnit(authModel.$authModalType);

  if (authModalType === "signup") {
    return <SignUpPageUI />;
  }
  return <SignInPageUI />;
};

export default AuthPage;
