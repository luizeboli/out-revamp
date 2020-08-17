import styled from 'styled-components';
import { Play } from '@styled-icons/fa-solid/Play';

export const Container = styled.div`
  margin: 1.5rem 0;

  --background: #2f5777;
  --text-color: #adadad;
  --transition: all 0.3s;

  :hover {
    --background: #151515;
    --text-color: #fff;
  }
`;

export const PlayButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;

  > span {
    color: var(--text-color);
    text-transform: uppercase;
    letter-spacing: 3px;

    font-size: 0.75rem;
    font-weight: 500;

    margin-left: 0.5rem;
    transition: var(--transition);
  }
`;

export const PlayIconWrapper = styled.div`
  background: var(--background);
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: clamp(2.75rem, 5vw, 3.5rem);
  height: clamp(2.75rem, 5vw, 3.5rem);

  transition: var(--transition);
`;

export const PlayIcon = styled(Play)`
  color: #fff;
  width: clamp(1rem, 2vw, 1.25rem);
  margin-left: 3.5px;
`;
