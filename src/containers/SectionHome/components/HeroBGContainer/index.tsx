import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const HeroBGContainer: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "hero-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      Tag="section"
      fluid={data.background.childImageSharp.fluid}
    >
      {children}
    </BackgroundImage>
  );
};

export default HeroBGContainer;
