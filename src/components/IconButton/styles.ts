import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  text-align: center;
  outline: none;
  border: none;
  background-color: transparent;

  &:hover,
  &:active {
    background: #ebecf5;
  }
`;
