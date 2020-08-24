import React from 'react';

import MasonryGallery from './MasonryGallery';
import * as S from './styles';

const SectionOurWorks = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>Nossos eventos</h1>

        <MasonryGallery />
      </S.Container>
    </S.Wrapper>
  );
};

export default SectionOurWorks;
