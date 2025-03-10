import React from 'react';
import Slider from 'react-slick';

import SectionLayout from '@components/SectionLayout';
import TestimonialCard from '@components/TestimonialCard';
import theme from '@styles/theme';

import testimonials from './data';
import * as S from './styles';

const slickSettings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SectionOurWorks = () => {
  return (
    <SectionLayout
      backgroundColor={theme.black}
      headingColor={theme.secondary}
      headingAlignment="center"
      name="volunteers"
    >
      <h1>Conheça nossos parceiros</h1>
      <h2>Junte-se aos nosso voluntários!</h2>

      <S.SliderContent>
        <Slider {...slickSettings}>
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              id={item.id}
              name={item.name}
              content={item.content}
            />
          ))}
        </Slider>
      </S.SliderContent>
    </SectionLayout>
  );
};

export default SectionOurWorks;
