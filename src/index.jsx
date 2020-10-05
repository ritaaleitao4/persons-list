import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import { GlobalStyle } from './styles';
import Home from './views/Home';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment>,
  document.getElementById('root'),
);
