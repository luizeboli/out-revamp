import styled, { css } from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  padding-left: 0.5rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  a:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

export const TooltipContent = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: Monospace;
`;

const iconStyles = css`
  cursor: pointer;
  width: 1.5rem;
  color: rgba(255, 255, 255, 0.74);

  transition: all 0.3s;

  :hover,
  :focus {
    color: #2f5777;
  }
`;

export const FacebookIcon = styled(Facebook)`
  ${iconStyles}
`;

export const InstagramIcon = styled(Instagram)`
  ${iconStyles}
`;

export const TwitterIcon = styled(Twitter)`
  ${iconStyles}
`;
