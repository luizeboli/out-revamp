import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import SectionLayout from '@components/SectionLayout';
import SocialLinks from '@components/SocialLinks';
import setupLightbox from '@hooks/setupLightbox';
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
              ...GatsbyImageSharpFluid_noBase64
            }
            original: fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    setupLightbox({
      selector: '.out-calendar',
      outerSliderEl: 'gslider',
      innerSlideEl: 'gslide',
      innerContainerEl: 'ginner-container',
    });
  }, []);

  return (
    <SectionLayout
      backgroundColor={theme.secondary}
      headingColor={theme.primary}
      headingAlignment="center"
      name="join-us"
    >
      <h1>Seja um voluntário</h1>
      <h2>Fique atento às programações!</h2>

      <S.ImageWrapper>
        {calendar.nodes.map((node) => (
          <a
            key={node.childImageSharp.id}
            href={node.childImageSharp.original.src}
            className="out-calendar"
            aria-label="Calendário de ações e eventos"
          >
            <Img fluid={node.childImageSharp.thumb} backgroundColor />
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
