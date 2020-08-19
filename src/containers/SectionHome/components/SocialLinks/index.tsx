import React from 'react';
import { roundArrow } from 'tippy.js';
import Tippy from '@tippyjs/react';

import * as S from './styles';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/themes/material.css';

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
  {
    id: 3,
    tooltip: <S.TooltipContent>@out_ong</S.TooltipContent>,
    icon: S.TwitterIcon,
    href: 'https://twitter.com/out_ong',
  },
];

const SocialLinks = () => {
  return (
    <S.Container>
      {socialMedias.map(({ id, tooltip, icon: Icon, href }) => (
        <Tippy
          key={id}
          placement="right"
          animation="scale-extreme"
          theme="material"
          content={tooltip}
          arrow={roundArrow}
          inertia
        >
          <a href={href} rel="noreferrer" target="_blank">
            <Icon />
          </a>
        </Tippy>
      ))}
    </S.Container>
  );
};

export default SocialLinks;
