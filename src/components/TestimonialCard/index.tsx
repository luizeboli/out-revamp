import React from 'react';

import AU1 from '@assets/aboutUs/AU1.jpg';

import * as S from './styles';

type Props = {
  id: number;
  name: string;
  content: string;
};

const TestimonialCard: React.FC<Props> = ({ id, name, content }) => {
  return (
    <S.Container>
      <S.Volunteer>
        <S.ImageWrapper>
          <img src={AU1} />
        </S.ImageWrapper>
        <span>Luiz Felicio</span>
      </S.Volunteer>

      <S.Content>
        <S.QuoteIcon />

        <input type="checkbox" id={`check-${id}`} />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <label className="toggle-text" htmlFor={`check-${id}`}>
          Ver tudo
        </label>
      </S.Content>
    </S.Container>
  );
};

export default TestimonialCard;
