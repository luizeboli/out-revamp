import styled from 'styled-components';

export const InnerContainer = styled.div`
  > p:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  > p {
    color: #192d3e;
    font-size: clamp(1rem, 2vw, 1.375rem);
    text-align: center;
    max-width: 750px;
    line-height: 1.5;

    > a {
      display: inline-block;
      color: #192d3e;
      font-size: clamp(1.2rem, 2.5vw, 1.625rem);
      font-weight: 500;
      margin-top: 0.5rem;
      text-decoration: none;
      padding-bottom: 0.2rem;
      border-bottom: 2px solid #192d3e;
      transition: all 0.3s;

      :hover,
      :focus {
        opacity: 0.9;
        border-bottom: 2px solid rgba(255, 255, 255, 0.54);
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
  margin: 3rem 0;
  width: 100%;
  max-width: 650px;

  .gatsby-image-wrapper {
    border-radius: 4px;
  }
`;
