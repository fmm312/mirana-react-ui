import React from 'react';
import { storiesOf } from '@storybook/react';
import { IoIosAlert } from 'react-icons/io';
import { Snackbar } from '../src/components';

storiesOf('Snackbar', module)
  .add('Success', () => (
    <Snackbar
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      icon={<IoIosAlert />}
      status="success"
      open
    />
  ))
  .add('Error', () => (
    <Snackbar
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      icon={<IoIosAlert />}
      status="error"
      open
    />
  ));
