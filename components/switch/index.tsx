import React, { useEffect, useRef } from "react";
import { Animated, ViewProps } from "react-native";
import { Typography } from "../typography/styled";
import { SwitchContainer, SwitchThumb, SwitchWrapper } from "./styled";

export interface SwitchProps extends ViewProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  labelVariant?: "regular" | "semibold" | "thin" | "h1";
}

export const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  label,
  labelVariant = "regular",
  ...props
}) => {
  const translateX = useRef(new Animated.Value(value ? 20 : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? 20 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value]);

  const handlePress = () => {
    if (!disabled && onValueChange) {
      onValueChange(!value);
    }
  };

  return (
    <SwitchWrapper {...props}>
      {label && <Typography $variant={labelVariant}>{label}</Typography>}
      <SwitchContainer
        $isActive={value}
        onPress={handlePress}
        disabled={disabled}
      >
        <SwitchThumb style={{ transform: [{ translateX }] }} />
      </SwitchContainer>
    </SwitchWrapper>
  );
};
