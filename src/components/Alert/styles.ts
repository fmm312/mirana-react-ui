import styled from 'styled-components';
import { AlertProps } from './index';

export const Container = styled.div<AlertProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.error ? '#FCECE8' : props.warning ? '#FCF5E8' : '#eaeef8'};
  padding: 14px 20px;
  border-radius: 0.375rem;
  width: 100%;
  color: ${props =>
    props.error ? '#E54321' : props.warning ? '#E3A02C' : '#0f52ba'};

  .icon {
    font-size: 24px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  margin-left: 12px;
`;
