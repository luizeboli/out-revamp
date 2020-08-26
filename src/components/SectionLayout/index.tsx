import React from 'react';

import * as S from './styles';

type Props = {
  backgroundColor: string;
  headingColor: string;
  headingAlignment?: string;
};

const SectionLayout: React.FC<Props> = ({
  children,
  backgroundColor,
  headingColor,
  headingAlignment,
}) => {
  return (
    <S.Wrapper backgroundColor={backgroundColor}>
      <S.Container
        headingColor={headingColor}
        headingAlignment={headingAlignment}
      >
        {children}
      </S.Container>
    </S.Wrapper>
  );
};

export default SectionLayout;
