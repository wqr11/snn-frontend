import { RelativePathString, usePathname, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { styled, useTheme } from "styled-components/native";
import { NavItem } from "../nav-item/NavItem";
import { navList } from "../nav-list.data";

export const Footer = () => {
  const theme = useTheme();

  const { navigate } = useRouter();

  const pathname = usePathname();

  const styles = StyleSheet.create({
    footer: {
      borderTopWidth: 1,
      borderTopColor: theme.grayScale.gray2,
    },
  });

  return (
    <FooterContainer style={styles.footer}>
      {navList.map((item) => (
        <NavItem
          key={item.title}
          onPress={() => navigate(item.link as RelativePathString)}
          isText={false}
          isActive={pathname === item.link}
          {...item}
        />
      ))}
    </FooterContainer>
  );
};

const FooterContainer = styled(View)`
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 8px 34px 8px 34px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
`;
