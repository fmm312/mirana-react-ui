import styled from 'styled-components';
import { GridProps } from '.';

export const Container = styled.div<GridProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  width: ${({ width }) => `${width}%`};

  > * {
    margin: ${({ spacing }) => `${spacing}px`};
  }
`;
