import { themeModel } from "@/entities/theme";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { styled } from "styled-components/native";
import { THEMES, ThemeMode } from "../provider";

interface IProps {
  data: {
    title: string;
    id: string;
  }[];
  activeId: string;
  setActiveId: (activeId: any) => void;
  margin?: {
    top?: number;
    bottom?: number;
  };
}

const { width } = Dimensions.get("window");

export const Tab = ({
  data,
  activeId,
  setActiveId,
  margin = {
    bottom: 0,
    top: 0,
  },
}: IProps) => {
  const themeMode = useUnit(themeModel.$themeMode);

  const translateX = useSharedValue(0);
  const barWidth = useSharedValue(0);

  const [tabSizes, setTabSizes] = useState<{
    [key: string]: { x: number; width: number };
  }>({});

  const handleTabLayout = (tabId: string) => (event: any) => {
    const { x, width } = event.nativeEvent.layout;

    setTabSizes((prev) => ({
      ...prev,
      [tabId]: { x, width },
    }));
  };

  useEffect(() => {
    const activeTabData = tabSizes[activeId];

    if (activeTabData) {
      const { x, width } = activeTabData;

      translateX.value = withTiming(x, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });

      barWidth.value = withTiming(width, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
    }
  }, [activeId, tabSizes]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
    width: barWidth.value,
  }));

  return (
    <View
      style={{
        flexDirection: "row",
        width,
        paddingHorizontal: 16,
        gap: 24,
        alignItems: "center",
        marginTop: margin.top,
        marginBottom: margin.bottom,
      }}
    >
      <Animated.View style={[animatedStyles, styles(themeMode).bar]} />

      {data.map(({ id, title }) => (
        <Pressable
          key={id}
          onPress={() => setActiveId(id)}
          style={{ flexDirection: "row", gap: 10 }}
          onLayout={handleTabLayout(id)}
        >
          {activeId === id ? (
            <>
              <ActiveText>{title}</ActiveText>
            </>
          ) : (
            <>
              <CommonText>{title}</CommonText>
            </>
          )}
        </Pressable>
      ))}
    </View>
  );
};

const styles = (theme: ThemeMode) =>
  StyleSheet.create({
    bar: {
      height: 2,
      backgroundColor: THEMES[theme].accent.primary,
      width: 40,
      position: "absolute",
      bottom: -10,
    },
  });

const ActiveText = styled(Text)`
  color: ${({ theme }) => theme.accent.primary};
  font-size: 14px;
  font-weight: 500;
`;

const CommonText = styled(Text)`
  color: ${({ theme }) => theme.grayScale.gray1};
  font-size: 14px;
  font-weight: 500;
`;

const CountActiveText = styled(ActiveText)`
  fontsize: 12px;
  border-radius: 4px;
`;

const CountCommonText = styled(CommonText)`
  fontsize: 12px;
  border-radius: 4px;
`;

const CountBox = styled(View)`
  width: 22px;
  height: 22px;
  background-color: ${({ theme }) => theme.grayScale.gray3};
  justify-content: center;
  align-items: center;
`;
