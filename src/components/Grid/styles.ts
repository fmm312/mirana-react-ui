import styled from 'styled-components';
import { GridProps } from '.';

export const Container = styled.div<GridProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-right: ${({ pr }) => `${pr}px`};

  > * {
    margin: ${({ spacing }) => `${spacing}px`};
  }
`;
