import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const IconButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

export default IconButton;
