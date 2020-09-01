import React from 'react';

import Navigation from '@containers/Navigation';
import GlobalStyle from '@styles/globalStyles';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
