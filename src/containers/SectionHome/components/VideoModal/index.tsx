import React, { useEffect } from 'react';
import GLightbox from 'glightbox';

import * as S from './styles';

import 'glightbox/dist/css/glightbox.min.css';

const VideoModal = () => {
  useEffect(() => {
    const lb = GLightbox({
      plyr: {
        css: 'https://cdn.plyr.io/3.5.6/plyr.css', // Default not required to include
        js: 'https://cdn.plyr.io/3.5.6/plyr.js', // Default not required to include
        config: {
          ratio: '16:9',
          muted: false,
          hideControls: true,
          vimeo: {
            byline: false,
            portrait: false,
            title: false,
            speed: true,
            transparent: false,
          },
        },
      },
      selector: '#out-video',
      closeOnOutsideClick: true,
      onOpen: () => addListenerToGLightbox(),
    });

    const addListenerToGLightbox = () => {
      const sliderContainer = document.getElementsByClassName('gslider')[0];
      const videoContainer = document.getElementsByClassName(
        'gvideo-container',
      )[0];

      sliderContainer.addEventListener('click', (e) => {
        if (e.target === e.currentTarget || e.target === videoContainer) {
          lb.close();
        }
      });
    };
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
