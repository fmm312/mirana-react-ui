import React from 'react';
import { GrClose } from 'react-icons/gr';
import { IconButton } from '..';

export default { title: 'Components/IconButton', component: IconButton };

export function Default() {
  return (
    <IconButton>
      <GrClose />
    </IconButton>
  );
}
