import { createEffect, createStore, sample } from "effector";
import { INotification } from "./types";

export const notifyFx = createEffect<string, INotification, Error>(
  (text: string) => {
    const id = `${Date.now()}-${Math.random().toString(10)}`;
    return {
      id,
      text,
    };
  }
);

export const $notifications = createStore<INotification[]>([]).on(
  notifyFx.doneData,
  (state, data) => [...state, data]
);

const removeNotificationFx = createEffect(
  (id: string) => new Promise((resolve) => setTimeout(() => resolve(id), 3000))
);

sample({
  clock: notifyFx.doneData,
  fn: (notif) => notif.id,
  target: removeNotificationFx,
});

sample({
  clock: removeNotificationFx.doneData,
  source: $notifications,
  fn: (notifications, id) => notifications.filter((f) => f.id !== id),
  target: $notifications,
});
