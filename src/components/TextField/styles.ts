import styled from 'styled-components';
import { TextFieldProps } from '.';

export const Container = styled.input<TextFieldProps>`
  padding: ${props => (props.startIcon ? '18px 18px 18px 40px' : '18px 12px')};
  border-radius: 4px;
  outline: none;
  border: ${props => (props.error ? ' 1px solid red' : ' 1px solid #c0c0c0')};
  color: #393b47;
  box-sizing: border-box;
  box-shadow: none;
  font-size: 16px;

  &:disabled {
    opacity: 0.7;
    cursor: initial;
  }

  &:hover:not(:disabled) {
    border: ${props => (props.error ? '1px solid red' : '1px solid #393b47')};
  }

  &:focus:not(:disabled) {
    border: ${props => (props.error ? '2px solid red' : ' 2px solid #0f52ba')};
  }

  ::placeholder {
    color: ${props => props.error && 'red'};
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 24px;
  position: relative;
  left: 35px;
  top: 3px;
`;
