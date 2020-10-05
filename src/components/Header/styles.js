import styled from 'styled-components';
import { colors, Container } from '../../styles';

export const HeaderSection = styled.header`
  position: fixed;
  background-color: ${colors.gray};
  width: 100%;
  z-index: 2;
  padding: 10px 0;
  top: 0;
  left: 0;

  img {
    height: 40px;
  }
`;

export const HeaderContainer = styled.div`
  ${Container}
`;
