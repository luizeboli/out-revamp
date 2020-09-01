import React, { useEffect } from 'react';
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
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
    href: 'about-us',
    uppercase: true,
    color: 'primary',
  },
  {
    id: 2,
    title: 'Vem participar!',
    href: 'join-us',
    uppercase: true,
    color: 'primary',
  },
];

const getItemVariant = (yValue: number) => ({
  hidden: { y: yValue, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      mass: 2,
    },
  },
});

const SectionHome = () => {
  const { mobile, desktop, background } = useStaticQuery(graphql`
    query {
      mobile: file(
        sourceInstanceName: { eq: "siteImages" }
        name: { eq: "out-logo" }
      ) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      desktop: file(
        sourceInstanceName: { eq: "siteImages" }
        name: { eq: "out-logo" }
      ) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_noBase64
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

  const controls = useAnimation();
  const { scrollY } = useViewportScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, -150]);
  const imgY = useTransform(scrollY, [0, 800], [0, 400]);

  useEffect(() => {
    controls.start('visible');
  }, []);

  return (
    <S.Container name="home">
      <motion.div
        style={{
          y: imgY,
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Img
          fluid={background.childImageSharp.fluid}
          alt="A palavra OUT escrita em letra de mão"
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
          }}
          placeholderStyle={{
            filter: 'blur(5px)',
          }}
          backgroundColor
        />
      </motion.div>

      <S.Header>
        <Img
          fixed={logoSources}
          alt="A palavra OUT escrita em letra de mão"
          className="out-header-logo"
        />
      </S.Header>

      <S.Content
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              when: 'beforeChildren',
              staggerChildren: 0,
              delay: 0.1,
            },
          },
        }}
        style={{ y: contentY }}
      >
        <S.Title variants={getItemVariant(-30)}>
          <h1>Instituição OUT</h1>
          <h6>A nossa gente é a nossa causa.</h6>
        </S.Title>

        <S.Actions variants={getItemVariant(30)}>
          <VideoModal />
          <hr />
          {actionButtons.map(({ id, title, href, uppercase, color }) => (
            <React.Fragment key={id}>
              <Button href={href} uppercase={uppercase} color={color}>
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
