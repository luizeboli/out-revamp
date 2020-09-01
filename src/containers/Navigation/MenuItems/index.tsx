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
    href: 'home',
  },
  {
    id: 2,
    title: 'Quem somos',
    href: 'about-us',
  },
  {
    id: 3,
    title: 'Trabalhos',
    href: 'social-activities',
  },
  {
    id: 4,
    title: 'Parceiros',
    href: 'volunteers',
  },
  {
    id: 5,
    title: 'Transparência financeira',
    href: 'social-activities',
  },
  {
    id: 6,
    title: 'Quero ser voluntário',
    href: 'join-us',
  },
];

const MenuWrapper = ({ onClick }) => (
  <S.List variants={variants}>
    {navigationLinks.map((link) => (
      <MenuItem key={link.id} link={link} onClick={onClick} />
    ))}
  </S.List>
);

export default MenuWrapper;
