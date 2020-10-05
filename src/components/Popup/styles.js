import styled from 'styled-components';
import { colors } from '../../styles';

export const MainModal = styled.div`
  text-align: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  opacity: 0;
  transition: opacity 0.15s linear, z-index 0.15;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: scroll;

  &.open {
    z-index: 99999;
    opacity: 1;
    overflow: hidden;

    > div {
      &:first-child {
        transform: translate(0,-50%);
        top: 50%;
        position: relative;
        z-index: 999;
      }

      &:last-child {
        background: rgba(0, 0, 0, 0.6);
        z-index: 99;
      }
    }
  }
`;

export const ModalInner = styled.div`
  transition: transform 0.3s ease-out;
  display: inline-block;
  max-width: 400px;
  width: 100%;
  margin: 30px auto;
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${colors.superLightGray};
  font-weight: 900;
  color: ${colors.darker};
  border-bottom: 1px solid ${colors.lightGray};

  span {
    font-size: 20px;
    align-items: center;
    color: ${colors.softGray};
    cursor: pointer;
  }
`;

export const ModalInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;

  h4 {
    margin: 0;
    font-weight: 900;
  }

  p {
    margin: 0;
    color: ${colors.green};
    font-size: 1rem;
    font-weight: 900;
  }

  hr {
    border: none;
    border-top: 1px solid ${colors.lightGray};
    width: 100%;
    margin: 25px 0px;
  }
`;

export const ImgContainer = styled.div`
  margin: 20px auto;
  width: 80px;
  height: 80px;
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
    font-size: 1.5rem;
  }
`;

export const TableInfo = styled.table`
  margin: 0;

  tr {
    td {
      text-align: left;
      font-weight: 100;
      padding: 10px;
      font-size: 0.8rem;
      color: ${colors.softGray};
    }
    td:first-child {
      text-align: right;
      font-weight: 900;
      font-size: 0.9rem;
      color: ${colors.gray};
    }
  }
`;

export const Form = styled.form`
  text-align: left;

  label {
    display: block;
    font-size: 0.8rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    input {
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid ${colors.lightGray};
      border-radius: 2px;
      padding: 5px;
      color: ${colors.gray};
    }
  }
`;

export const ModalFooter = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  padding: 8px 10px;
  background-color: ${colors.superLightGray};
  border-top: 1px solid ${colors.lightGray};

  button {
    outline: none;
    border: 1px solid ${colors.lightGray};
    border-radius: 2px;
    background-color: ${colors.white};
    padding: 5px 25px;
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;

    &:nth-of-type(2) {
      border: 1px solid ${colors.blue};
      background-color: ${colors.blue};
      color: ${colors.white};
      margin-left: 1rem;
    }
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transition: background 0.15s linear;
`;
