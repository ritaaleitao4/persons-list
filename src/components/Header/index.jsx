import React from 'react';
import Logo from '../../assets/svg/pipedrive-logo.svg';
import {
  HeaderSection,
  HeaderContainer,
} from './styles';

const Header = () => (
  <HeaderSection>
    <HeaderContainer>
      <img src={Logo} alt="pipedrive-logo" />
    </HeaderContainer>
  </HeaderSection>
);

export default Header;
