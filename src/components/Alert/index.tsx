import React from 'react';
import { IoIosAlert } from 'react-icons/io';
import { Container, Title } from './styles';

interface AlertProps {
  title?: string;
  error?: boolean;
  warning?: boolean;
}

const Alert: React.FC<AlertProps> = ({ title, error, warning }) => {
  return (
    <Container error={error} warning={warning}>
      <IoIosAlert className="icon" />
      <Title>{title}</Title>
    </Container>
  );
};

export { Alert };
export type { AlertProps };
