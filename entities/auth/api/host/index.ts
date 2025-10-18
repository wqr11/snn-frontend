import { API_BASE_URL } from "@/shared/config";
import { authModel } from "../..";

export const $authHost = async (url: string, options?: RequestInit) => {
  const tokens = authModel.$tokens.getState();

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
