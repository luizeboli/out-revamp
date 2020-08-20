import React, { ReactNode } from 'react';

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
    <S.Button color={color} uppercase={uppercase} href={href} size={size}>
      {children}
    </S.Button>
  );
};

export default Button;
