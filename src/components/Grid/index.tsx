import React from 'react';

import { Container } from './styles';

interface GridProps {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  spacing?: number;
  width?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  sm?: number;
  lg?: number;
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
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  sm,
  lg,
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
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      sm={sm}
      lg={lg}
      style={style}
    >
      {children}
    </Container>
  );
};

export { Grid };
export type { GridProps };
