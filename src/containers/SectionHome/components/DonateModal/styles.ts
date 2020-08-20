import styled from 'styled-components';

export const Container = styled.div`
  .rodal-dialog {
    padding: 1.5rem;
  }
`;

export const ModalContent = styled.div`
  > h4 {
    color: #2f5777;
    font-weight: 500;
    font-size: clamp(1.5rem, 2vw, 2.5rem);
  }

  > p {
    color: #151515;
    line-height: 1.5;
    font-size: clamp(0.875rem, 1.2vw, 1rem);
  }

  > p:first-of-type {
    margin: 1rem 0;
  }

  > form {
    margin-top: 1rem;
  }
`;
