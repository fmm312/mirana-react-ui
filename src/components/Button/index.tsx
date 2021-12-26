import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  rounded?: boolean;
  borderless?: boolean;
  large?: boolean;
  small?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outlined,
  rounded,
  borderless,
  large,
  small,
  disabled,
  ...props
}) => {
  return (
    <Container
      outlined={outlined}
      rounded={rounded}
      borderless={borderless}
      large={large}
      small={small}
      disabled={disabled}
      {...props}
    >
      {children}
    </Container>
  );
};

export { Button };
export type { ButtonProps };
