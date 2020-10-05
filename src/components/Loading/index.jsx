import React from 'react';
import Spinner from '../../assets/svg/spinner.svg';
import { LoadingContainer } from './styles';

const Loading = () => (
  <LoadingContainer>
    <img src={Spinner} alt="spinner" />
  </LoadingContainer>
);

export default Loading;
