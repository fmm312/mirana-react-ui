import React from 'react';

import { Container } from './styles';

interface GridProps {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  spacing?: number;
  width?: number;
  style?: any;
}

const Grid: React.FC<GridProps> = ({
  children,
  direction,
  justify,
  align,
  wrap,
  spacing,
  width,
  style,
}) => {
  return (
    <Container
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      spacing={spacing}
      width={width}
      style={style}
    >
      {children}
    </Container>
  );
};

export { Grid };
export type { GridProps };
