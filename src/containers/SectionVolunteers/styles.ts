import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #151515;
  padding: 2rem 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;

  > h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: clamp(1.625rem, 4vw, 2.5rem);
    font-weight: 500;
    color: #8ab3b9;
    position: relative;

    &:after {
      content: ' ';
      border-bottom: 2px solid #8ab3b9;
      width: 100px;
      position: absolute;
      bottom: -0.625rem;
      left: 50%;
      margin-left: -50px;
    }
  }

  > h2 {
    color: #8ab3b9;
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 500;
    margin-top: 1rem;
  }
`;

export const SliderContent = styled.div`
  width: 100%;
  margin-top: 3rem;

  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;

    > div:first-child {
      margin-top: 2rem;
    }

    > div:last-child {
      margin-top: 3rem;
    }
  }
  .slick-initialized .slick-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  .slick-list {
    margin: 0 auto;
  }
  .slick-dots {
    list-style: none;
    display: flex !important;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    li {
      background: white;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 0 0.25rem;
      &.slick-active {
        background: #8ab3b9;
      }
    }
    button {
      opacity: 0;
      width: 12px;
      height: 12px;
      cursor: pointer;
    }
  }
`;
