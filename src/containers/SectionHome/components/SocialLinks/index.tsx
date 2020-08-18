import React from 'react';
import { roundArrow } from 'tippy.js';
import Tippy from '@tippyjs/react';

import * as S from './styles';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/themes/material.css';

const SocialLinks = () => {
  return (
    <S.Container>
      <Tippy
        placement="right"
        animation="scale-extreme"
        theme="material"
        content={<S.TooltipContent>/projetoout</S.TooltipContent>}
        arrow={roundArrow}
        inertia
      >
        <a href="https://fb.me/projetoout" rel="noreferrer" target="_blank">
          <S.FacebookIcon />
        </a>
      </Tippy>

      <Tippy
        placement="right"
        animation="scale-extreme"
        theme="material"
        content={<S.TooltipContent>@projetoout</S.TooltipContent>}
        arrow={roundArrow}
        inertia
      >
        <a
          href="https://instagram.com/projetoout"
          rel="noreferrer"
          target="_blank"
        >
          <S.InstagramIcon />
        </a>
      </Tippy>

      <Tippy
        placement="right"
        animation="scale-extreme"
        theme="material"
        content={<S.TooltipContent>@out_ong</S.TooltipContent>}
        arrow={roundArrow}
        inertia
      >
        <a href="https://twitter.com/out_ong" rel="noreferrer" target="_blank">
          <S.TwitterIcon />
        </a>
      </Tippy>
    </S.Container>
  );
};

export default SocialLinks;
