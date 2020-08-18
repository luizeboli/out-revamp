import React from 'react';
import ReactTooltip from 'react-tooltip';

import * as S from './styles';

const SocialLinks = () => {
  return (
    <S.Container>
      <a
        id="facebook-icon"
        data-tip
        data-for="facebook-icon"
        href="https://fb.me/projetoout"
        rel="noreferrer"
        target="_blank"
      >
        <S.FacebookIcon />
        <ReactTooltip id="facebook-icon" place="right" effect="solid">
          <S.TooltipContent>/projetoout</S.TooltipContent>
        </ReactTooltip>
      </a>

      <a
        id="instagram-icon"
        data-tip
        data-for="instagram-icon"
        href="https://instagram.com/projetoout"
        rel="noreferrer"
        target="_blank"
      >
        <S.InstagramIcon id="instagram-icon" />
        <ReactTooltip id="instagram-icon" place="right" effect="solid">
          <S.TooltipContent>@projetoout</S.TooltipContent>
        </ReactTooltip>
      </a>

      <a
        id="twitter-icon"
        data-tip
        data-for="twitter-icon"
        href="https://twitter.com/out_ong"
        rel="noreferrer"
        target="_blank"
      >
        <S.TwitterIcon id="twitter-icon" />
        <ReactTooltip id="twitter-icon" place="right" effect="solid">
          <S.TooltipContent>@out_ong</S.TooltipContent>
        </ReactTooltip>
      </a>
    </S.Container>
  );
};

export default SocialLinks;
