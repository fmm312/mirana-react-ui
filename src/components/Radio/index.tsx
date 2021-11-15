import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const RadioComponent: React.FC<RadioProps> = ({ label, id }) => {
  return (
    <Container>
      <div className="radio">
        <input className="radio-input" type="radio" id={id} />
        <div className="radio-fill" />
        <label htmlFor={id} className="label">
          {label}
        </label>
      </div>
    </Container>
  );
};

export default RadioComponent;
