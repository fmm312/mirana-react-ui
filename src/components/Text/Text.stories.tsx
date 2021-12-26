import React from 'react';
import { Text } from '..';

export default { title: 'Components/Text', component: Text };

export function Small() {
  return <Text type="small">Lorem ipsum dolor sit amet</Text>;
}

export function Medium() {
  return <Text type="medium">Lorem ipsum dolor sit amet</Text>;
}

export function Large() {
  return <Text type="large">Lorem ipsum dolor sit amet</Text>;
}

export function xLarge() {
  return <Text type="xLarge">Lorem ipsum dolor sit amet</Text>;
}

export function Normal() {
  return <Text weight="normal">Lorem ipsum dolor sit amet</Text>;
}

export function Semibold() {
  return <Text weight="semibold">Lorem ipsum dolor sit amet</Text>;
}

export function Bold() {
  return <Text weight="bold">Lorem ipsum dolor sit amet</Text>;
}
