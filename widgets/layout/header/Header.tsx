import { styled } from "styled-components/native";
import { Logo } from "./logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.View`
  padding-top: 42px;
  background: ${({ theme }) => theme.background};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 12px 16px;
`;
