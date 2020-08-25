import styled from 'styled-components';

import Quote from '@assets/siteImages/quote-icon';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 0 1.5rem 2.2rem 1.5rem;
  margin: 0.5rem;
`;

export const Volunteer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-weight: 600;
  }
`;

export const ImageWrapper = styled.div`
  width: 72px;
  height: 72px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0px 3px 11px -3px rgba(0, 0, 0, 0.64);
  margin-top: -2.5rem;
  margin-bottom: 0.625rem;

  > img {
    width: 72px;
    height: 72px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: grid;
  justify-items: end;
  position: relative;
  padding-top: 1.5rem;

  > input {
    display: none;
    &:checked + p {
      -webkit-line-clamp: unset;
    }
  }

  .toggle-text {
    cursor: pointer;
    color: #2f5777;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }

  > p {
    display: -webkit-box;
    font-size: clamp(0.875rem, 1.4vw, 1rem);
    overflow: hidden;
    margin-left: 0.25rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const QuoteIcon = styled(Quote)`
  width: 22px;
  height: 22px;
  position: absolute;
  top: -0.2rem;
  left: 0.2rem;
  opacity: 0.24;
`;
