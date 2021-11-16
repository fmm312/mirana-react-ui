import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ error, rows, ...props }) => {
  return <Container error={error} rows={rows} {...props} />;
};

export type { TextAreaProps };
export { TextArea };
