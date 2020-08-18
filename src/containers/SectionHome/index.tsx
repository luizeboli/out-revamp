import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from '@components/Button';

import HeroBGContainer from './components/HeroBGContainer';
import SocialLinks from './components/SocialLinks';
import VideoModal from './components/VideoModal';
import * as S from './styles';

const actionButtons = [
  {
    id: 1,
    title: 'Vem ver!',
    href: '#',
    uppercase: true,
    color: 'primary',
  },
  {
    id: 2,
    title: 'Vem participar!',
    href: '#',
    uppercase: true,
    color: 'primary',
  },
  {
    id: 3,
    title: 'Vem doar!',
    href: '#',
    uppercase: true,
    color: 'secondary',
    size: 'medium',
  },
];

const SectionHome = () => {
  const { mobile, desktop, background } = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "out-logo.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktop: file(relativePath: { eq: "out-logo.png" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }

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

  const logoSources = [
    mobile.childImageSharp.fixed,
    {
      ...desktop.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    // <HeroBGContainer image={background}>
    <S.Wrapper>
      <Img
        fluid={background.childImageSharp.fluid}
        alt="A palavra OUT escrita em letra de mão"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: '-1',
          maxWidth: 'none',
          maxHeight: 'none',
        }}
      />
      <S.Header>
        <Img
          fixed={logoSources}
          alt="A palavra OUT escrita em letra de mão"
          className="out-header-logo"
        />
      </S.Header>

      <S.Content>
        <S.Title>
          <h1>Instituição OUT</h1>
          <h6>A nossa gente é a nossa causa.</h6>
          <VideoModal />
        </S.Title>

        <S.Actions>
          {actionButtons.map(({ id, title, href, uppercase, color, size }) => (
            <React.Fragment key={id}>
              <Button
                href={href}
                uppercase={uppercase}
                color={color}
                size={size}
              >
                {title}
              </Button>
              {id === 2 && <hr />}
            </React.Fragment>
          ))}
        </S.Actions>
      </S.Content>

      <SocialLinks />
    </S.Wrapper>
    // </HeroBGContainer>
  );
};

export default SectionHome;
