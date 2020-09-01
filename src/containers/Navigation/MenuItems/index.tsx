import * as React from 'react';

import MenuItem from './MenuItem';
import * as S from './styles';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.1,
    },
  },
};

const navigationLinks = [
  {
    id: 1,
    title: 'Início',
  },
  {
    id: 2,
    title: 'Quem somos',
  },
  {
    id: 3,
    title: 'Trabalhos',
  },
  {
    id: 4,
    title: 'Parceiros',
  },
  {
    id: 5,
    title: 'Transparência financeira',
  },
  {
    id: 6,
    title: 'Quero ser voluntário',
  },
];

const MenuWrapper = () => (
  <S.List variants={variants}>
    {navigationLinks.map((link) => (
      <MenuItem key={link.id} link={link} />
    ))}
  </S.List>
);

export default MenuWrapper;
