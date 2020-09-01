import React, { ReactNode } from 'react';
import { Link } from 'react-scroll';

import * as S from './styles';

type ButtonProps = {
  children: string | ReactNode;
  color: string;
  href?: string;
  size?: string;
  uppercase: boolean;
};

const Button = ({ children, color, uppercase, href, size }: ButtonProps) => {
  return (
    <S.Button color={color} uppercase={uppercase} href={href}>
      {href ? (
        <Link to={href} size={size} smooth="easeInOutQuart" duration={1500}>
          {children}
        </Link>
      ) : (
        { children }
      )}
    </S.Button>
  );
};

export default Button;
