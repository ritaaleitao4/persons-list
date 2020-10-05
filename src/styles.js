import styled, { createGlobalStyle, css } from 'styled-components';

// colors
export const colors = {
  white: '#FFFFFF',
  gray: '#3f4346',
  darker: '#181818',
  softGray: '#9e9e9e',
  lightGray: '#d2d2d2',
  superLightGray: '#f7f7f7',
  lightBlue: '#dde9fa',
  blue: '#5680b3',
  green: '#82da99',
};

// glogal
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${colors.darker};
    font-weight: 100;
    font-family: 'Open Sans';
    padding-top: 60px;
  }
  button {
    font-family: 'Open Sans';
  }
`;

export const Container = css`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
  position: relative;
`;

// home view
export const SectionContainer = styled.div`
  ${Container}
`;

export const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin: 0 0 1rem;
  border-bottom: 1px solid ${colors.lightGray};

  > div {
    display: flex;
    align-items:center;
    h1 {
      font-weight: 800;
      font-size: 1rem;
      margin-right: 1rem;
    }
    button {
      display: block;
      outline: none;
      cursor: pointer;
      background-color: ${colors.blue};
      color: ${colors.white};
      position: relative;
      border: none;
      border-radius: 4px;
      padding: 5px 10px;
      font-size: 0.7rem;
    }
  }
`;

export const Filter = styled.input`
  max-width: 220px;
  width: 100%;
  outline: none;
  border: 1px solid ${colors.lightGray};
  border-radius: 2px;
  padding: 5px;
  color: ${colors.gray};
`;
