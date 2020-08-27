import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

type WrapperProps = {
  backgroundColor: string;
};

type ContainerProps = {
  headingColor: string;
  headingAlignment?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    min-height: 100vh;
    padding: 4rem 1rem;
  `}
`;

export const Container = styled(motion.div)`
  ${({ headingColor, headingAlignment }: ContainerProps) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 auto;

    > h1 {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: clamp(1.625rem, 4vw, 2.5rem);
      font-weight: 500;
      color: ${headingColor};
      position: relative;
      text-align: ${headingAlignment};

      &:after {
        content: ' ';
        border-bottom: 2px solid;
        width: 100px;
        position: absolute;
        bottom: -0.625rem;
        left: 50%;
        margin-left: -50px;
      }
    }

    > h2 {
      color: ${headingColor};
      font-size: clamp(1rem, 2vw, 1.2rem);
      font-weight: 500;
      margin-top: 1rem;
      text-align: center;
    }
  `}
`;
