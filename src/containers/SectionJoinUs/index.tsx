import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import GLightbox from 'glightbox';

import SectionLayout from '@components/SectionLayout';
import SocialLinks from '@components/SocialLinks';
import theme from '@styles/theme';

import * as S from './styles';

const SectionOurWorks = () => {
  const { calendar } = useStaticQuery(graphql`
    query {
      calendar: allFile(filter: { sourceInstanceName: { eq: "calendar" } }) {
        nodes {
          childImageSharp {
            id
            thumb: fluid(maxWidth: 540, quality: 70) {
              ...GatsbyImageSharpFluid
            }
            original: fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const lb = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      selector: '.out-calendar',
      zoomable: true,
      closeOnOutsideClick: true,
      onOpen: () => addListenerToGLightbox(),
    });

    const addListenerToGLightbox = () => {
      const slides = document
        .getElementsByClassName('gslider')[0]
        .getElementsByClassName('gslide');

      Array.from(slides).forEach((slide) => {
        const slideContainer = slide.getElementsByClassName(
          'ginner-container',
        )[0];

        slideContainer.addEventListener('click', ({ target, currentTarget }) =>
          target === currentTarget ? lb.close() : null,
        );
      });
    };
  }, []);

  return (
    <SectionLayout
      backgroundColor={theme.secondary}
      headingColor={theme.primary}
      headingAlignment="center"
    >
      <h1>Seja um voluntário</h1>
      <h2>Fique atento às programações!</h2>

      <S.ImageWrapper>
        {calendar.nodes.map((node) => (
          <a
            key={node.childImageSharp.id}
            href={node.childImageSharp.original.src}
            className="out-calendar"
          >
            <Img fluid={node.childImageSharp.thumb} />
          </a>
        ))}
      </S.ImageWrapper>

      <S.InnerContainer>
        <p>
          Entre em contato com a gente através das redes sociais.
          <br />
          Com você o projeto ficará ainda mais completo!
        </p>

        <SocialLinks
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight="0.5rem"
          width="clamp(2rem, 3.8vw, 2.8rem)"
          color="#192d3e"
          tooltipPlacement="top"
          containerMargin="0.5rem 0 1.5rem 0"
        />

        <p>
          Se você tem uma empresa e quer contribuir, mande-nos um e-mail:
          <br />
          <a href="mailto:parceiros@out.ong.br">parceiros@out.ong.br</a>
        </p>
      </S.InnerContainer>
    </SectionLayout>
  );
};

export default SectionOurWorks;
