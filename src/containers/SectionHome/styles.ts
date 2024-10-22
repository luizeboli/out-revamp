import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled(Element)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  color: #fff;
  position: relative;
`;

export const Content = styled(motion.div)`
  margin: auto;
`;

export const Header = styled.div`
  position: absolute;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  margin-bottom: auto;

  .out-header-logo {
    opacity: 0.74;
  }
`;

export const Title = styled(motion.div)`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: clamp(2.75rem, 9vw, 8rem);
  }

  > h2 {
    font-size: clamp(1rem, 2.5vw, 2rem);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.74);
  }
`;

export const Actions = styled(motion.div)`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;

  > hr {
    height: 0;
    width: 0;
    border: 0;
  }

  ${media.greaterThan('medium')`
      flex-flow: row wrap;

      > hr {
        flex-basis: 100%; 
        height: 0; 
        margin: 0; 
        border: 0;
      }
  `}
`;
