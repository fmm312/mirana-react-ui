import React, { InputHTMLAttributes } from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './styles';

const Switch: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" {...props} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

export default Switch;
