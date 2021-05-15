import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <NavSmall>
            <NavLink href="#">
              <Icon id="shopping-bag" />
            </NavLink>
            <NavLink href="#">
              <Icon id="search" />
            </NavLink>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" />
            </UnstyledButton>
          </NavSmall>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${QUERIES.tabletDown} {
    align-items: center;
  }

  @media ${QUERIES.phoneDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(2.5rem, 4vw + 0.25rem, 4rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletDown} {
    display: none;
  }
`;

const NavSmall = styled.nav`
  display: none;
  & > * {
    margin-left: 32px;
  }
  margin: 0;
  justify-content: flex-end;

  @media ${QUERIES.tabletDown} {
    display: flex;
  }

  @media ${QUERIES.phoneDown} {
    & > * {
      margin-left: 16px;
    }
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
