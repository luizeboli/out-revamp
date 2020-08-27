import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

import * as S from './styles';

type Props = {
  title: string;
  content: string;
  image: FluidObject;
};

const Card = ({ title, content, image }: Props) => {
  return (
    <S.Container>
      <S.PhotoContainer>
        <Img fluid={image} style={{ height: '100%' }} backgroundColor />
      </S.PhotoContainer>

      <S.CardTitle>
        <span>{title}</span>
      </S.CardTitle>
      <S.CardContent>
        <p>{content}</p>
      </S.CardContent>
    </S.Container>
  );
};

export default Card;
