import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, clamp(10.5rem, 24vw, 400px));
  grid-auto-flow: dense;
  grid-gap: 0.25rem;
  justify-content: center;
`;

export const GridItem = styled.div`
  overflow: hidden;
  > a {
    width: 115%;
    height: 100%;
    display: flex;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    transition: transform 0.4s ease-out, filter 0.4s ease-out;
  }

  &:nth-child(1) {
    grid-column: span 2;

    font-size: clamp(0.875rem, 2vw, 1rem);
    border-radius: 4px;
    margin: 3rem -0.75rem -1.5rem;
    color: #fff;
    background: #192d3eea;
    padding: 1.25rem 1rem;
    z-index: 1;
  }
  &:nth-child(2) {
    grid-row: span 2;
  }
  &:nth-child(6),
  &:nth-child(8) {
    grid-row: span 2;
  }
  &:nth-child(7) {
    grid-row: span 2;
  }

  :hover,
  :focus {
    .gatsby-image-wrapper {
      transform: translateX(-3%) scale(1.05);
      filter: brightness(0.7);
    }
  }
`;
