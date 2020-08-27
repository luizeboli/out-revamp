import React, { useEffect } from 'react';

import setupLightbox from '@hooks/setupLightbox';

import * as S from './styles';

import 'glightbox/dist/css/glightbox.min.css';

const VideoModal = () => {
  useEffect(() => {
    setupLightbox({
      selector: '#out-video',
      outerSliderEl: 'gslider',
      innerSlideEl: 'gslide-inner-content',
      innerContainerEl: 'gvideo-container',
      isVideo: true,
    });
  }, []);

  return (
    <S.Container>
      <S.PlayButton id="out-video" href="https://vimeo.com/354890053">
        <S.PlayIconWrapper>
          <S.PlayIcon />
        </S.PlayIconWrapper>

        <span>Reproduzir Vídeo</span>
      </S.PlayButton>
    </S.Container>
  );
};

export default VideoModal;
