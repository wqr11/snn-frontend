import { API_BASE_URL, LOCAL_SAVED_KEYS } from "@/shared/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authModel } from "../..";

export const $authHost = async (url: string, options?: RequestInit) => {
  let tokens;

  tokens = authModel.$tokens.getState();

  if (!tokens?.access_token) {
    authModel.getAccessFromLocalFx();

    const access_token = await AsyncStorage.getItem(
      LOCAL_SAVED_KEYS.ACCESS_TOKEN
    );
    const refresh_token = await AsyncStorage.getItem(
      LOCAL_SAVED_KEYS.REFRESH_TOKEN
    );

    tokens = { access_token, refresh_token };
  }

  return await (
    await fetch(`${API_BASE_URL}${url}`, {
      ...(options ?? {}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(!!tokens
          ? !!tokens?.access_token && {
              Authorization: `Bearer ${tokens?.access_token}`,
            }
          : {}),
        ...(options?.headers ?? {}),
      },
    })
  ).json();
};
