import React from 'react';
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    outlined?: boolean;
    disabled?: boolean;
    rounded?: boolean;
}
declare const Button: React.FC<Props>;
export { Button };
//# sourceMappingURL=index.d.ts.map