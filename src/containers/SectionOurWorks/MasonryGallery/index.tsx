import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import setupLightbox from '@hooks/setupLightbox';

import * as S from './styles';

type NodeProps = {
  childImageSharp: {
    thumb: FluidObject;
    original: FluidObject;
    id: string;
  };
};

const MasonryGallery = () => {
  const { works } = useStaticQuery(graphql`
    query {
      works: allFile(filter: { sourceInstanceName: { eq: "works" } }) {
        nodes {
          childImageSharp {
            id
            thumb: fluid(maxWidth: 540, quality: 70) {
              ...GatsbyImageSharpFluid_noBase64
            }
            original: fluid(quality: 70) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `);
  useEffect(() => {
    setupLightbox({
      selector: '.out-gallery',
      outerSliderEl: 'gslider',
      innerSlideEl: 'gslide',
      innerContainerEl: 'ginner-container',
    });
  }, []);

  return (
    <S.Grid>
      <S.GridItem>
        <span>Tem luz, as vezes câmera, mas sempre muita ação!</span>
      </S.GridItem>
      {works.nodes.map((node: NodeProps) => (
        <S.GridItem key={node.childImageSharp.id}>
          <a href={node.childImageSharp.original.src} className="out-gallery">
            <Img fluid={node.childImageSharp.thumb} backgroundColor></Img>
          </a>
        </S.GridItem>
      ))}
    </S.Grid>
  );
};

export default MasonryGallery;
