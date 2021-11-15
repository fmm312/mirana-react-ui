import React from 'react';

import { Container, Icon, Title } from './styles';

interface BadgeProps {
  title?: string;
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ title, icon }) => {
  return (
    <Container>
      <Icon>{icon}</Icon>

      <Title>{title}</Title>
    </Container>
  );
};

export default Badge;
