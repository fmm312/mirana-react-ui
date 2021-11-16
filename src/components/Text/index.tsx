import React from 'react';

import { TextComponent } from './styles';

export interface TextProps {
  type?: string;
  weight?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  type = 'medium',
  weight = 'normal',
}) => {
  return (
    <TextComponent type={type} weight={weight}>
      {children}
    </TextComponent>
  );
};

export default Text;
