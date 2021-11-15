import React from 'react';
import { storiesOf } from '@storybook/react';
import { IoIosRemoveCircle } from 'react-icons/io';
import { AiFillFileText, AiFillCheckCircle } from 'react-icons/ai';
import { Badge } from '../src/components';

storiesOf('Badge', module)
  .add('Blue', () => <Badge title="Lorem ipsum" />)
  .add('Red', () => <Badge title="Lorem ipsum" color="red" />)
  .add('Green', () => <Badge title="Lorem ipsum" color="green" />)
  .add('Blue with icon', () => (
    <Badge title="Lorem ipsum" icon={<AiFillCheckCircle />} />
  ))
  .add('Red with icon', () => (
    <Badge title="Lorem ipsum" icon={<IoIosRemoveCircle />} color="red" />
  ))
  .add('Green icon', () => (
    <Badge title="Lorem ipsum" icon={<AiFillFileText />} color="green" />
  ));
