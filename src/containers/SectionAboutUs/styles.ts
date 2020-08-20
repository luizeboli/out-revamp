import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  background: #8ab3b9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  > h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: clamp(1.625rem, 4vw, 2.5rem);
    font-weight: 500;
    color: #192d3e;
    position: relative;

    &:after {
      content: ' ';
      border-bottom: 1px solid #192d3e;
      width: 120px;
      position: absolute;
      bottom: -0.625rem;
      left: 50%;
      margin-left: -60px;
    }
  }

  > h6 {
    color: #192d3e;
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 500;
    margin-top: 3rem;
    text-align: center;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, auto)
  `}
`;
