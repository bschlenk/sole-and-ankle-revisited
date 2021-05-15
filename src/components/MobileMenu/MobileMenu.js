/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Side />
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 16px;
  color: ${COLORS.gray[900]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 22px;
  flex: 0;
  flex-direction: column;
  text-transform: uppercase;
`;

const Content = styled(DialogContent)`
  background: ${COLORS.white};
  width: 300px;
  height: 100%;
  position: absolute;
  right: 0px;
  padding: 32px;

  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-size: ${18 / 16}rem;
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: flex-end;

  a {
    color: ${COLORS.gray[700]};
    font-size: ${14 / 16}rem;
  }
`;

const Overlay = styled(DialogOverlay)`
  background: ${COLORS.gray[700].slice(0, -1) + ' / 80%)'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Side = styled.div`
  flex: 1;
`;

export default MobileMenu;
