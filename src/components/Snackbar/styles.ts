import styled from 'styled-components';
import { SnackbarProps } from '.';

export const Container = styled.div<SnackbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.status === 'error'
      ? '#F24636'
      : props.status === 'success'
      ? '#53AF50'
      : '#53AF50'};
  padding: 6px 18px;
  border-radius: 0.375rem;
  width: 100%;
  color: #ffffff;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
`;

export const Icon = styled.div`
  margin-right: 10px;
  font-size: 22px;
  position: relative;
  top: 2px;
`;
