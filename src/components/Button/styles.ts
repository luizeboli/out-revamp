import styled, { css } from 'styled-components';

type Props = {
  color: string;
  uppercase: boolean;
  size?: string;
  href?: string;
};

export const Button = styled.button<Props>`
  ${({ color, uppercase, size, href }) => css`
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
    
    padding: 1rem;
    margin-bottom: 0.5rem;
    
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
        color: #151515;
        background-color: #cc7639;
        font-weight: 600;

        :hover {
          color: #fff;
        }
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

    ${
      href &&
      css`
        padding: 0;

        > a {
          padding: 1rem;
          width: 100%;
          height: 100%;
        }
      `
    }
  `}
`;
