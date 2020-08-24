import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #8ab3b9;
  padding: 2rem 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;

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
`;
