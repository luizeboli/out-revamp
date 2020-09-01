import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { World } from '@styled-icons/boxicons-regular/World';
import { HandHoldingHeart } from '@styled-icons/fa-solid/HandHoldingHeart';
import { Medal } from '@styled-icons/fa-solid/Medal';
import { Class } from '@styled-icons/material-outlined/Class';
import { FoodBank } from '@styled-icons/material-outlined/FoodBank';
import { Googleclassroom } from '@styled-icons/simple-icons/Googleclassroom';

export const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
  line-height: 1.5;

  > h2 {
    font-weight: 500;
    font-size: 1.125rem;
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
  margin-top: 3rem;

  ${media.lessThan('medium')`
    grid-template-columns: 370px;
  `}
`;

export const GridItem = styled.div`
  padding: 0 1rem;
`;

const iconCss = css`
  width: 36px;
  flex-shrink: 0;
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
