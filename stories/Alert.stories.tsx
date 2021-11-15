import React from 'react';
import { storiesOf } from '@storybook/react';

import { Alert } from '../src/components';

storiesOf('Alert', module)
  .add('Default', () => (
    <Alert title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
  ))
  .add('Error', () => (
    <Alert
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      error
    />
  ))
  .add('Warning', () => (
    <Alert
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      warning
    />
  ));
