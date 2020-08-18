import styled, { css } from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  padding-left: 0.5rem;

  display: flex;
  flex-direction: column;
`;

const iconStyles = css`
  cursor: pointer;
  width: 1.25rem;
  margin-bottom: 0.5rem;
  color: #fff;

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

export const TooltipContent = styled.span`
  font-weight: 600;
  font-size: 0.625rem;
`;
