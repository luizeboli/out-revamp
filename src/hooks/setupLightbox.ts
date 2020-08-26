import Glightbox from 'glightbox';

type Props = {
  selector: string;
  outerSliderEl: string;
  innerSlideEl: string;
  innerContainerEl: string;
  isVideo?: boolean;
};

const setupLightbox = ({
  selector,
  outerSliderEl,
  innerSlideEl,
  innerContainerEl,
  isVideo = false,
}: Props) => {
  const videoConfig = {
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
  };

  const lb = Glightbox({
    plyr: isVideo ? videoConfig : undefined,
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    selector: selector,
    zoomable: true,
    closeOnOutsideClick: true,
    onOpen: () => addListenerToGLightbox(),
  });

  const addListenerToGLightbox = () => {
    const slides = document
      .getElementsByClassName(outerSliderEl)[0]
      .getElementsByClassName(innerSlideEl);

    Array.from(slides).forEach((slide) => {
      const slideContainer = slide.getElementsByClassName(innerContainerEl)[0];

      slideContainer.addEventListener('click', ({ target, currentTarget }) =>
        target === currentTarget ? lb.close() : null,
      );
    });
  };

  return lb;
};

export default setupLightbox;
