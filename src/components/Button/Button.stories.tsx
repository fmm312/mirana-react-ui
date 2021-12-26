import React from 'react';
import { Button } from '..';

export default { title: 'Components/Button', component: Button };

export function Default() {
  return <Button>Default</Button>;
}

export function Outlined() {
  return <Button outlined>Outlined</Button>;
}

export function Disabled() {
  return <Button disabled>Disabled</Button>;
}

export function Rounded() {
  return <Button rounded>Rounded</Button>;
}

export function Borderless() {
  return <Button borderless>Borderless</Button>;
}

export function Large() {
  return <Button large>Large</Button>;
}

export function Small() {
  return <Button small>Small</Button>;
}
