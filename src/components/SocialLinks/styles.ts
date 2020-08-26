import styled, { css } from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

type ContainerProps = {
  position?: string;
  bottom?: number;
  left?: number;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  paddingLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  width?: string;
  color?: string;
  containerMargin?: string;
};

export const Container = styled.div<ContainerProps>`
  ${({
    position,
    bottom,
    left,
    paddingLeft,
    marginRight,
    marginBottom,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    width,
    color,
    containerMargin,
  }) => css`
    position: ${position};
    bottom: ${bottom}px;
    left: ${left};

    padding-left: ${paddingLeft};
    margin: ${containerMargin};

    display: ${display};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};

    a:not(:last-child) {
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
    }

    .social-link-icon {
      width: ${width};
      color: ${color};
    }
  `}
`;

export const TooltipContent = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: Monospace;
`;

const iconStyles = css`
  cursor: pointer;

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
