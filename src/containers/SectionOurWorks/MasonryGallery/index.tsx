import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import GLightbox from 'glightbox';

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
      selector: '.out-gallery',
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
    <S.Grid>
      <S.GridItem>
        <span>Tem luz, as vezes câmera, mas sempre muita ação!</span>
      </S.GridItem>
      {works.nodes.map((node: NodeProps) => (
        <S.GridItem key={node.childImageSharp.id}>
          <a href={node.childImageSharp.original.src} className="out-gallery">
            <Img fluid={node.childImageSharp.thumb}></Img>
          </a>
        </S.GridItem>
      ))}
    </S.Grid>
  );
};

export default MasonryGallery;
