import React from 'react';

import GlobalStyle from '@styles/globalStyles';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
