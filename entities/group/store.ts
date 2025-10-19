import { GroupApi } from "@/features/group-slug/api";
import { createEffect, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { IUser } from "../user";

export const AllGroupsGate = createGate();

export const getAllGroupsFx = createEffect(async () => {
  return await GroupApi.getAllGroups();
});

export const $allGroups = createStore<IUser[]>([]).on(
  getAllGroupsFx.doneData,
  (_, data) => data.users
);

sample({
  clock: AllGroupsGate.open,
  target: getAllGroupsFx,
});
