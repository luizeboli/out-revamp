import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import SocialLinks from '@components/SocialLinks';

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

  return (
    <S.Wrapper>
      <S.Container>
        <h1>Seja um voluntário</h1>
        <h2>Fique atento às programações!</h2>

        <S.ImageWrapper>
          {calendar.nodes.map((node) => (
            <a
              key={node.id}
              href={node.childImageSharp.original.src}
              className="out-gallery"
            >
              <Img fluid={node.childImageSharp.thumb} />
            </a>
          ))}
        </S.ImageWrapper>

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
      </S.Container>
    </S.Wrapper>
  );
};

export default SectionOurWorks;