import { Icon, IconType } from "@/components";
import { THEMES } from "@/components/provider";
import { StyledText } from "@/components/styled-text";
import { themeModel } from "@/entities/theme";
import { useUnit } from "effector-react";
import { TouchableOpacity } from "react-native";

import { styled } from "styled-components/native";

export interface IProps {
  icon: IconType;
  title: string;
  onPress: () => void;
  paddingVertical?: number;
  isText?: boolean;
  isActive?: boolean;
}

export const NavItem = ({
  icon,
  title,
  onPress,
  paddingVertical = 17,
  isText = true,
  isActive = false,
}: IProps) => {
  const themeMode = useUnit(themeModel.$themeMode);

  return (
    <StyledPressable paddingVertical={paddingVertical} onPress={onPress}>
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
    </StyledPressable>
  );
};

const StyledPressable = styled(TouchableOpacity)<{ paddingVertical: number }>`
  flex-direction: row;
  gap: 12px;
  padding: ${(props) => props.paddingVertical}px 0;
`;
