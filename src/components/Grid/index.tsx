import React from 'react';

import { Container } from './styles';

interface GridProps {
  direction?: string;
  justify?: string;
  align?: string;
  spacing?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

const Grid: React.FC<GridProps> = ({
  children,
  direction,
  justify,
  align,
  spacing,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
}) => {
  return (
    <Container
      direction={direction}
      justify={justify}
      align={align}
      spacing={spacing}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
    >
      {children}
    </Container>
  );
};

export { Grid };
export type { GridProps };
