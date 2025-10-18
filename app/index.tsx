import { authModel } from "@/entities/auth";
import { MainPageUI } from "@/pages/main";
import { useUnit } from "effector-react";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const isAuth = useUnit(authModel.$isAuth);
  const isAuthChecked = useUnit(authModel.$isAuthChecked);

  useEffect(() => {
    if (isAuthChecked && !isAuth) {
      router.replace("/sign-in");
    }
  }, [isAuth, isAuthChecked]);

  if (!isAuthChecked) {
    return null;
  }

  return <MainPageUI />;
}
