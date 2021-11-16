import React from 'react';
import { GrClose } from 'react-icons/gr';
import IconButton from '../IconButton';
import { Container, Title, Icon } from './styles';

interface SnackbarProps {
  title?: string;
  status?: string;
  onClose?: () => void;
  open?: boolean;
  icon?: React.ReactNode;
}

const Snackbar: React.FC<SnackbarProps> = ({
  title,
  icon,
  status,
  open,
  onClose,
}) => {
  return open ? (
    <Container status={status} onClose={onClose}>
      {icon && <Icon>{icon}</Icon>}
      <Title>{title}</Title>
      <IconButton>
        <GrClose />
      </IconButton>
    </Container>
  ) : null;
};

export { Snackbar };
export type { SnackbarProps };
