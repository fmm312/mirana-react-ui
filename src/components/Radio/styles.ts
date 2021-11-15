import styled from 'styled-components';

export const Container = styled.div`
  .radio {
    width: 20px;
    height: 20px;
    position: relative;

    &::before {
      content: '';
      border-radius: 100%;
      border: 1px solid #c0c0c0;
      background: #fafafa;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      box-sizing: border-box;
      pointer-events: none;
      z-index: 0;
    }
  }

  .radio-input {
    opacity: 0;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .radio-fill {
    background: #0f52ba;
    width: 0;
    height: 0;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.2s ease-in, height 0.2s ease-in;
    pointer-events: none;
    z-index: 1;
  }

  .radio-input:checked ~ .radio-fill {
    width: calc(100% - 7px);
    height: calc(100% - 7px);
    transition: width 0.2s ease-out, height 0.2s ease-out;
  }

  .label {
    position: relative;
    left: 30px;
    cursor: pointer;
  }
`;
