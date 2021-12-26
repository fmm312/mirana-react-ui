import styled from 'styled-components';
import { BlockProps } from '.';

export const Container = styled.div<BlockProps>`
  display: flex;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-right: ${({ pr }) => `${pr}px`};
`;
