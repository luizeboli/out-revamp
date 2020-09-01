import React from 'react';

import SEO from '@components/SEO';
import Navigation from '@containers/Navigation';
import GlobalStyle from '@styles/globalStyles';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      <Navigation />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
