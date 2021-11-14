import styled from 'styled-components';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  background-color: ${props =>
    props.outlined || props.borderless ? 'transparent' : '#0F52BA'};
  color: ${props =>
    props.outlined || props.borderless ? '#0F52BA' : '#ffffff'};
  padding: ${props => (props.large ? '1.375rem 2.75rem' : '1rem 2.75rem')};
  text-transform: initial;
  border-radius: ${props => (props.rounded ? '3.188rem' : '0.375rem')};
  border: ${props => (props.outlined ? `2px solid ${'#0F52BA'}` : 'none')};
  transition: 0.1s ease;
  height: ${props => props.small && '12px'};
  cursor: pointer;
  font-size: ${props => (props.small ? '12px' : '14px')};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    color: ${props => (props.outlined ? '#0F52BA' : '#ffffff')};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${props => !props.borderless && '#0f52ba'};
    color: ${props => !props.borderless && '#ffffff'};
    box-shadow: ${props =>
      !props.borderless && 'rgba(0, 0, 0, 0.35) 0px 5px 15px'};
    filter: brightness(1.25);
  }
`;
