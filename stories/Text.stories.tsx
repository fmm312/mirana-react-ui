import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../src/components';

storiesOf('Text', module)
  .add('Small', () => <Text type="small">Lorem ipsum dolor sit amet</Text>)
  .add('Medium', () => <Text type="medium">Lorem ipsum dolor sit amet</Text>)
  .add('Large', () => <Text type="large">Lorem ipsum dolor sit amet</Text>)
  .add('xLarge', () => <Text type="xLarge">Lorem ipsum dolor sit amet</Text>)
  .add('Normal', () => <Text weight="normal">Lorem ipsum dolor sit amet</Text>)
  .add('Semibold', () => (
    <Text weight="semibold">Lorem ipsum dolor sit amet</Text>
  ))
  .add('Bold', () => <Text weight="bold">Lorem ipsum dolor sit amet</Text>);
