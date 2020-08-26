import React from 'react';
import { Placement, roundArrow } from 'tippy.js';
import Tippy from '@tippyjs/react';

import * as S from './styles';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/themes/material.css';

type Props = {
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
  tooltipPlacement?: Placement;
  containerMargin?: string;
};

const socialMedias = [
  {
    id: 1,
    tooltip: <S.TooltipContent>/projetoout</S.TooltipContent>,
    icon: S.FacebookIcon,
    href: 'https://fb.me/projetoout',
  },
  {
    id: 2,
    tooltip: <S.TooltipContent>@projetoout</S.TooltipContent>,
    icon: S.InstagramIcon,
    href: 'https://instagram.com/projetoout',
  },
];

const SocialLinks: React.FC<Props> = ({ tooltipPlacement, ...restProps }) => {
  return (
    <S.Container {...restProps}>
      {socialMedias.map(({ id, tooltip, icon: Icon, href }) => (
        <Tippy
          key={id}
          placement={tooltipPlacement}
          animation="scale-extreme"
          theme="material"
          content={tooltip}
          arrow={roundArrow}
          inertia
        >
          <a href={href} rel="noreferrer" target="_blank">
            <Icon className="social-link-icon" />
          </a>
        </Tippy>
      ))}
    </S.Container>
  );
};

export default SocialLinks;
