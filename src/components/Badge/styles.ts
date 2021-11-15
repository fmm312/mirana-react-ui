import styled from 'styled-components';
import { BadgeProps } from '.';

export const Container = styled.div<BadgeProps>`
  background-color: ${({ color }) =>
    color === 'red' ? '#FAE9E8' : color === 'green' ? '#E8F2F2' : '#EAEEF8'};
  color: ${({ color }) =>
    color === 'red' ? '#CA2317' : color === 'green' ? '#168243' : '#0F52BA'};
  padding: 5px 12px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  margin-right: 8px;
  position: relative;
  top: 2px;
  font-size: 20px;
`;

export const Title = styled.div`
  font-size: 14px;
`;
