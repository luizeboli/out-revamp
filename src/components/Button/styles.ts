import styled, { css } from 'styled-components';

type Props = {
  color: string;
  uppercase: boolean;
  size?: string;
};

export const Button = styled.a<Props>`
  ${({ color, uppercase, size }) => css`
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
    
    color: #fff;
    font-size: clamp(0.70rem, 1.5vw, 0.875rem);
    font-weight: 400;
    letter-spacing: 3px;
    text-align: center;
    
    margin-bottom: 0.5rem;
    padding: 1rem;
    
    max-width: clamp(14rem, 22.5vw, 17rem);
    width: 100%;
    
    transition: all 0.3s;

    :hover {
      background: #111111;
    }

    ${
      color === 'primary' &&
      css`
        background-color: #2f5777;
      `
    }

    ${
      color === 'secondary' &&
      css`
        background-color: #cc7639;
      `
    }

    ${
      color === 'tertiary' &&
      css`
        background-color: #151515;
        :hover {
          background-color: #2f5777;
        }
      `
    }

    ${
      uppercase &&
      css`
        text-transform: uppercase;
      `
    }

    ${
      size === 'medium' &&
      css`
        width: clamp(11rem, 22.5vw, 14rem);
      `
    }
  `}
`;
