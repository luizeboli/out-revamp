import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #8ab3b9;
  padding: 2rem 0 4rem 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;

  > h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: clamp(1.625rem, 4vw, 2.5rem);
    font-weight: 500;
    color: #192d3e;
    position: relative;

    &:after {
      content: ' ';
      border-bottom: 2px solid #192d3e;
      width: 100px;
      position: absolute;
      bottom: -0.625rem;
      left: 50%;
      margin-left: -50px;
    }
  }

  > h2 {
    color: #192d3e;
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 500;
    margin-top: 1rem;
  }

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
