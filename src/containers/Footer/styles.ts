import styled from 'styled-components';
import { KeyboardArrowUp } from '@styled-icons/material-rounded/KeyboardArrowUp';

export const Container = styled.footer`
  background-color: #151515;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 0.625rem;
    color: #fff;
    text-align: center;
    line-height: 1.5;
  }

  > button {
    font-weight: 500;
    margin-top: -2.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
  }
`;

export const ArrowUp = styled(KeyboardArrowUp)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
`;
