import { motion } from 'framer-motion';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled(motion.nav)`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  padding-left: 2.5rem;
  padding-right: 1.5rem;
  width: 35%;
  z-index: 1500;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const Title = styled(motion.h5)`
  position: absolute;
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  color: #5d9dd0;
`;

export const Footer = styled(motion.footer)`
  margin-top: 2rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.54);

  > a {
    display: inline-flex;
    margin-top: 1rem;
    margin-right: 1rem;
  }
`;
