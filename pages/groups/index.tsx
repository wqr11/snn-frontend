import { SearchField } from "@/components/search-field";
import { Tab } from "@/components/tab/tab";
import { useTabNavigation } from "@/components/tab/use-tab";
import { groupModel } from "@/entities/group";
import { AuthRedirect } from "@/features/auth-redirect";
import { useGate } from "effector-react";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { styled } from "styled-components/native";
import { AllGroups } from "./all-groups/AllGroups";
import { CompaniesGroup } from "./companies-group/CompaniesGroup";
import { CompetenciesGroup } from "./competencies-group/CompetenciesGroup";

type IdType = "all" | "companies" | "competencies";

interface IGroupItem {
  id: IdType;
  title: string;
}

const tabs: IGroupItem[] = [
  {
    id: "all",
    title: "Все",
  },
];

export const GroupsPageUI = () => {
  useGate(groupModel.AllGroupsGate);

  const { activeTab, setActiveTab } = useTabNavigation<IdType>(tabs);
  const [displayedTab, setDisplayedTab] = useState<IdType>(activeTab);
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (displayedTab !== activeTab) {
      opacity.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(10, { duration: 200 }, (finished) => {
        if (finished) {
          runOnJS(setDisplayedTab)(activeTab);
          opacity.value = withDelay(50, withTiming(1, { duration: 300 }));
          translateY.value = withDelay(50, withTiming(0, { duration: 300 }));
        }
      });
    }
  }, [activeTab, displayedTab]);

  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const renderContent = () => {
    switch (displayedTab) {
      case "all":
        return <AllGroups />;
      case "companies":
        return <CompaniesGroup />;
      case "competencies":
        return <CompetenciesGroup />;
      default:
        return <AllGroups />;
    }
  };

  return (
    <View>
      <AuthRedirect />
      <Container>
        <SearchField placeholder="Поиск" />
      </Container>

      <Tab
        margin={{
          bottom: 16,
          top: 16,
        }}
        setActiveId={setActiveTab}
        activeId={activeTab}
        data={tabs}
      />

      <Container>
        <Animated.View style={contentStyle}>{renderContent()}</Animated.View>
      </Container>
    </View>
  );
};

const Container = styled.View`
  padding: 0 16px;
`;
