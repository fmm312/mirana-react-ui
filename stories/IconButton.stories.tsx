import React from 'react';
import { storiesOf } from '@storybook/react';
import { GrClose } from 'react-icons/gr';
import { IconButton } from '../src/components';

storiesOf('IconButton', module).add('Default', () => (
  <IconButton>
    <GrClose />
  </IconButton>
));
