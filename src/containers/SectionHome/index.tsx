import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from '@components/Button';

import DonateModal from './components/DonateModal';
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
          fluid(quality: 100) {
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

  const [visible, setVisible] = useState(false);

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

      <SocialLinks />
    </S.Container>
  );
};

export default SectionHome;
