import React from 'react';

import { Container } from './styles';

interface BlockProps {
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

const Block: React.FC<BlockProps> = ({
  children,
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

export { Block };
export type { BlockProps };
