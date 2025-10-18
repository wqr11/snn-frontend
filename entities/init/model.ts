import { createStore } from "effector";
import { createGate } from "effector-react";

export const InitGate = createGate();

export const $isInitialized = createStore(false).on(InitGate.open, () => true);
