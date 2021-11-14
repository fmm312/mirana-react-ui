import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Outlined', () => <Button outlined>Outlined</Button>)
  .add('Disabled', () => <Button disabled>Disabled</Button>)
  .add('Rounded', () => <Button rounded>Rounded</Button>)
  .add('Borderless', () => <Button borderless>Borderless</Button>)
  .add('Large', () => <Button large>Large</Button>)
  .add('Small', () => <Button small>Small</Button>);
