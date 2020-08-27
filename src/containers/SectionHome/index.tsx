import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from '@components/Button';
import SocialLinks from '@components/SocialLinks';

import DonateModal from './components/DonateModal';
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
];

const SectionHome = () => {
  const { mobile, desktop, background } = useStaticQuery(graphql`
    query {
      mobile: file(
        sourceInstanceName: { eq: "siteImages" }
        name: { eq: "out-logo" }
      ) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktop: file(
        sourceInstanceName: { eq: "siteImages" }
        name: { eq: "out-logo" }
      ) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      background: file(
        sourceInstanceName: { eq: "siteImages" }
        name: { eq: "hero-bg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 70) {
            ...GatsbyImageSharpFluid
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
    <S.Container>
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
          <DonateModal />
        </S.Actions>
      </S.Content>

      <SocialLinks
        position="absolute"
        bottom={12}
        left={0}
        display="flex"
        flexDirection="column"
        paddingLeft="0.5rem"
        marginBottom="0.5rem"
        width="1.5rem"
        color="rgba(255, 255, 255, 0.74)"
        tooltipPlacement="right"
      />
    </S.Container>
  );
};

export default SectionHome;
