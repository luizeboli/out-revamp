import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { World } from '@styled-icons/boxicons-regular/World';
import { HandHoldingHeart } from '@styled-icons/fa-solid/HandHoldingHeart';
import { Medal } from '@styled-icons/fa-solid/Medal';
import { Class } from '@styled-icons/material-outlined/Class';
import { FoodBank } from '@styled-icons/material-outlined/FoodBank';
import { Googleclassroom } from '@styled-icons/simple-icons/Googleclassroom';

export const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #151515;
  padding: 2rem 0;
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
    margin-bottom: 2rem;
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
`;

export const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;

  > h6 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-left: 0.75rem;
  }
`;

export const ActivityContent = styled.p`
  color: #fff;
  line-height: 1.6;
  white-space: pre-line;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 2rem;
  justify-content: center;

  ${media.lessThan('medium')`
    grid-template-columns: 370px;
  `}
`;

export const GridItem = styled.div`
  padding: 0 1rem;
`;

const iconCss = css`
  width: 36px;
`;

export const ClassRoomIcon = styled(Googleclassroom)`
  ${iconCss}
`;
export const ClassIcon = styled(Class)`
  ${iconCss}
`;

export const WorldIcon = styled(World)`
  ${iconCss}
`;

export const HandLoveIcon = styled(HandHoldingHeart)`
  ${iconCss}
`;

export const FoodBankIcon = styled(FoodBank)`
  width: 42px;
`;

export const MedalIcon = styled(Medal)`
  ${iconCss}
`;
