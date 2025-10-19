import { API_BASE_URL } from "@/shared/config";
import { authModel } from "../../model";

export const $authHost = async (
  url: string,
  options?: RequestInit,
  setJsonType: boolean = true
) => {
  const tokens = authModel.$tokens.getState();

  const headers = new Headers();

  if (setJsonType) {
    headers.set("Content-Type", "application/json");
  }

  headers.set("Authorization", `Bearer ${tokens?.access_token}`);

  const res = await fetch(`${API_BASE_URL}${url}`, {
    ...(options ?? {}),
    headers,
  });

  if (!res.ok) {
    throw new Error(await res.json());
  }

  return res.json();
};
