import { createStore, sample } from "effector";
import { createGate } from "effector-react";
import { authModel } from "../auth";
import { postModel } from "../post";

export const InitGate = createGate();

export const $isInitialized = createStore(false).on(InitGate.open, () => true);

sample({
  clock: [InitGate.open],
  target: [authModel.getAccessFromLocalFx, postModel.getPosts],
});
