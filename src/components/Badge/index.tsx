import React from 'react';

import { Container, Icon, Title } from './styles';

interface BadgeProps {
  title?: string;
  icon?: React.ReactNode;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ title, icon, color }) => {
  return (
    <Container color={color}>
      <Icon>{icon}</Icon>

      <Title>{title}</Title>
    </Container>
  );
};

export { Badge };
export type { BadgeProps };
