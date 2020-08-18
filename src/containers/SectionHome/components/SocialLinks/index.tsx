import React from 'react';
import ReactTooltip from 'react-tooltip';

import * as S from './styles';

const SocialLinks = () => {
  return (
    <S.Container>
      <a href="https://fb.me/projetoout" rel="noreferrer" target="_blank">
        <S.FacebookIcon id="facebook-icon" data-tip data-for="facebook-icon" />
        <ReactTooltip
          id="facebook-icon"
          place="right"
          effect="solid"
          event="mouseenter focusin"
          eventOff="mouseleave focusout"
        >
          <S.TooltipContent>/projetoout</S.TooltipContent>
        </ReactTooltip>
      </a>

      <a
        href="https://instagram.com/projetoout"
        rel="noreferrer"
        target="_blank"
      >
        <S.InstagramIcon data-tip data-for="instagram-icon" />
        <ReactTooltip
          id="instagram-icon"
          place="right"
          effect="solid"
          event="mouseenter focusin"
          eventOff="mouseleave focusout"
        >
          <S.TooltipContent>@projetoout</S.TooltipContent>
        </ReactTooltip>
      </a>

      <a href="https://twitter.com/out_ong" rel="noreferrer" target="_blank">
        <S.TwitterIcon data-tip data-for="twitter-icon" />
        <ReactTooltip
          id="twitter-icon"
          place="right"
          effect="solid"
          event="mouseenter focusin"
          eventOff="mouseleave focusout"
        >
          <S.TooltipContent>@out_ong</S.TooltipContent>
        </ReactTooltip>
      </a>
    </S.Container>
  );
};

export default SocialLinks;
