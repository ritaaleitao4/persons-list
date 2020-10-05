import styled from 'styled-components';
import { colors } from '../../styles';

export const BtnLoadMore = styled.button`
  display: block;
  margin: 20px auto 60px;
  outline: none;
  cursor: pointer;
  background-color: ${colors.blue};
  color: ${colors.white};
  position: relative;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  letter-spacing: .48px;
  line-height: 28px;
`;

export const NoData = styled.p`
  padding: 20px;
  text-align: center;
  color: ${colors.softGray};
`;
