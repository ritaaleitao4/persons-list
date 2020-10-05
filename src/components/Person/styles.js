import styled from 'styled-components';
import { colors } from '../../styles';

export const PersonItem = styled.div`
  width: 100%;
  padding: 1.2rem;
  position: relative;
  border-radius: 2px;
  border: 1px solid ${colors.lightGray};
  background-color: ${colors.white};
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items:center;
`;

export const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  span {
    color: ${colors.blue};
    font-weight: 900;
    font-size: 14px;
  }
`;

export const Delete = styled.img`
  height: 0.85rem;
  cursor: pointer;
  margin-left: 1rem
`;

export const InfoContainer = styled.div`
  margin-right: 10px;
  cursor: pointer;

  h4 {
    font-size: 0.85rem;
    margin: 0 0 3px;
  } 

  p {
    color: ${colors.softGray};
    font-weight: 400;
    font-size: 0.7rem;
    margin: 0;
    display: flex;
    align-items: center;

    img {
      height: 12px;
      margin-right: 5px;
    }
  } 
`;
