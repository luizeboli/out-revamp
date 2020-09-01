import React from 'react';

import Button from '@components/Button';

import * as S from './styles';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <S.Container>
      <Button color="tertiary" uppercase href="home">
        <>
          <S.ArrowUp />
          Voltar ao Topo
        </>
      </Button>
      <span>
        Instituição OUT
        <br />© Copyright 2015 - {currentYear}
      </span>
    </S.Container>
  );
};

export default Footer;
