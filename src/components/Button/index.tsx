import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  outlined?: boolean;
  rounded?: boolean;
  borderless?: boolean;
  large?: boolean;
  small?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outlined,
  rounded,
  borderless,
  large,
  small,
  disabled,
  onClick,
}) => {
  return (
    <Container
      outlined={outlined}
      rounded={rounded}
      borderless={borderless}
      large={large}
      small={small}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export { Button };
export type { ButtonProps };
