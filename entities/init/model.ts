import { LOCAL_SAVED_KEYS } from "@/shared/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, sample } from "effector";
import { createGate } from "effector-react";
import { authModel } from "../auth";

export const InitGate = createGate();

export const $isInitialized = createStore(false).on(InitGate.open, () => true);

sample({
  clock: InitGate.open,
  fn: async () => {
    console.log(await AsyncStorage.getItem(LOCAL_SAVED_KEYS.ACCESS_TOKEN));
  },
  target: authModel.getAccessFromLocalFx,
});
