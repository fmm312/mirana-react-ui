import React from 'react';
import { GrClose } from 'react-icons/gr';
import { Button, Block, IconButton, Text } from '..';
import { Container } from './styles';

interface ModalProps {
  open?: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonClick?: () => void;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  title,
  description,
  buttonText,
  buttonClick,
  ...props
}) => {
  return (
    <Container {...props}>
      <div className="closeIcon">
        <IconButton onClick={onClose}>
          <GrClose />
        </IconButton>
      </div>
      <Text type="xLarge" weight="bold">
        {title}
      </Text>
      <Block mt={10} mb={30}>
        <Text>{description}</Text>
      </Block>
      <Button onClick={buttonClick}>{buttonText}</Button>
    </Container>
  );
};

export default Modal;
