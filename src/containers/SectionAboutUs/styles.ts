import styled from 'styled-components';
import media from 'styled-media-query';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, auto)
  `}
`;
