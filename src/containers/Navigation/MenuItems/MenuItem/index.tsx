import React from 'react';

import * as S from './styles';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    display: 'list-item',
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    display: 'none',
  },
};

const MenuItem = ({ link }) => {
  return (
    <S.ListItem
      count={link.id}
      transition={{ duration: 0.2 }}
      variants={variants}
      whileHover={{ scale: 1.1, color: '#5D9DD0' }}
      whileTap={{ scale: 0.95 }}
    >
      {link.title}
    </S.ListItem>
  );
};

export default MenuItem;
