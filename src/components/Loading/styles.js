import styled from 'styled-components';
import { colors } from '../../styles';

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: calc(100vh - 60px);
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: ${colors.white};
  z-index: 1;

  img {
    height: 80px;
  }
`;
