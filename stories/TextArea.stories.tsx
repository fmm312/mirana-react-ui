import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextArea } from '../src/components';

storiesOf('TextArea', module)
  .add('Default', () => <TextArea placeholder="Type here" rows={4} />)
  .add('Error', () => <TextArea placeholder="Type here" error rows={4} />)
  .add('Disabled', () => (
    <TextArea placeholder="Type here" disabled rows={4} />
  ));
