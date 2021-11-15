import React from 'react';
import { storiesOf } from '@storybook/react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextField } from '../src/components';

storiesOf('TextField', module)
  .add('Default', () => <TextField placeholder="Type here" />)
  .add('Start Icon', () => (
    <TextField placeholder="Type here" startIcon={<AiOutlineSearch />} />
  ))
  .add('Error', () => <TextField placeholder="Type here" error />)
  .add('Disabled', () => <TextField placeholder="Type here" disabled />);
