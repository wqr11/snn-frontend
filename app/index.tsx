import { authModel } from "@/entities/auth";
import { InitGate } from "@/entities/init";
import { userModel } from "@/entities/user";
import { MainPageUI } from "@/pages/main";
import { useGate, useUnit } from "effector-react";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useGate(InitGate);

  const isAuth = useUnit(userModel.$isAuth);
  const isAuthChecked = useUnit(authModel.$isAuthChecked);

  useEffect(() => {
    if (isAuthChecked && !isAuth) {
      router.replace("/auth");
    }
  }, [isAuth, isAuthChecked]);

  if (!isAuthChecked) {
    return null;
  }

  return <MainPageUI />;
}
