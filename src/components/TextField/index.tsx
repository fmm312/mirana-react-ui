import React, { InputHTMLAttributes } from 'react';
import { Container, FormControl, Icon } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  startIcon?: React.ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({
  error,
  startIcon,
  ...props
}) => {
  return (
    <FormControl>
      {startIcon && <Icon>{startIcon}</Icon>}

      <Container startIcon={startIcon} error={error} {...props} />
    </FormControl>
  );
};

export type { TextFieldProps };
export { TextField };
