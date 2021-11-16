import styled from 'styled-components';
import { TextProps } from './index';

export const TextComponent = styled.p<TextProps>`
  font-size: ${props =>
    props.type === 'small'
      ? '0.75rem'
      : props.type === 'medium'
      ? '0.875rem'
      : props.type === 'large'
      ? '1.125rem'
      : props.type === 'xLarge'
      ? '2.125rem'
      : '0.875rem'};
  font-weight: ${props =>
    props.weight === 'normal'
      ? 400
      : props.weight === 'semibold'
      ? 500
      : props.weight === 'bold'
      ? 700
      : 400};
`;
