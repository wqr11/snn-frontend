import { authModel } from "@/entities/auth";
import { userModel } from "@/entities/user";
import { useUnit } from "effector-react";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export function AuthRedirect() {
  const router = useRouter();
  const [isAuth, isAuthChecked] = useUnit([
    userModel.$isAuth,
    authModel.$isAuthChecked,
  ]);
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavigationReady(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isNavigationReady || !isAuthChecked) return;

    if (!isAuth) {
      router.replace("/auth");
    }
  }, [isAuth, isAuthChecked, isNavigationReady, router]);

  return null;
}
