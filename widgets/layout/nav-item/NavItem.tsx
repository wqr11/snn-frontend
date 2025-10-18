import { Icon, IconType } from "@/components";
import { Button } from "@/components/button";
import { THEMES } from "@/components/provider";
import { StyledText } from "@/components/styled-text";
import { themeModel } from "@/entities/theme";
import { useUnit } from "effector-react";
import { StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

export interface IProps {
  icon: IconType;
  title: string;
  onPress: () => void;
  isText?: boolean;
  isActive?: boolean;
}

export const NavItem = ({
  icon,
  title,
  onPress,
  isText = true,
  isActive = false,
}: IProps) => {
  const theme = useTheme();

  const themeMode = useUnit(themeModel.$themeMode);

  const styles = StyleSheet.create({
    button: {
      height: 72,
      width: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
  });

  return (
    <Button
      onPress={onPress}
      style={styles.button}
      $rippleColor={theme.grayScale.gray2}
    >
      <Icon
        name={icon}
        size={20}
        color={isActive ? THEMES[themeMode].accent.primary : undefined}
      />
      {isText && (
        <StyledText
          style={{
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          {title}
        </StyledText>
      )}
    </Button>
  );
};
