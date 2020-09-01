import React, { useEffect } from 'react';
import { useCycle } from 'framer-motion';

import useClickAway from '@hooks/useClickAway';

import MenuButton from './MenuButton';
import MenuItems from './MenuItems';
import * as S from './styles';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 1.5}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2,
    },
    boxShadow:
      'rgba(0, 0, 0, 0.2) -8px 0px 10px -5px, rgba(0, 0, 0, 0.14) -16px 0px 24px 2px, rgba(0, 0, 0, 0.12) 6px 0px 30px 5px',
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 48px) 40px)',
    transition: {
      delay: 0.45,
      type: 'spring',
      stiffness: 250,
      damping: 40,
    },
  },
};

const titleVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.25,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.4,
      duration: 0.15,
    },
  },
};

const footerVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.15,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useClickAway(() => {
    if (isOpen) toggleOpen();
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);

  return (
    <S.Container
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
      variants={sidebar}
    >
      <S.Title variants={titleVariants}>Navegue com a gente</S.Title>
      <MenuButton toggle={() => toggleOpen()} />
      <MenuItems />
      <S.Footer variants={footerVariants}>
        Conheça nossos projetos, nossos valores e como você pode colaborar com o
        nosso trabalho.
        <br />
      </S.Footer>
    </S.Container>
  );
};

export default Navbar;
