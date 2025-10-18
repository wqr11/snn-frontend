import { useUnit } from "effector-react";
import { StyleSheet, View } from "react-native";
import { notificationModel } from "../model";
import { Notification } from "./item";

export const Notifications = () => {
  const notifications = useUnit(notificationModel.$notifications);

  const styles = StyleSheet.create({
    wrapper: {
      position: "absolute",
      top: 8,
      left: 8,
      width: 160,
      zIndex: 10,
      gap: 2,
    },
  });

  return (
    <View style={styles.wrapper}>
      {notifications.map(({ id, text }) => (
        <Notification key={id}>{text}</Notification>
      ))}
    </View>
  );
};
