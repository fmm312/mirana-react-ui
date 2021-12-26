import React from 'react';
import { IoIosRemoveCircle } from 'react-icons/io';
import { AiFillFileText, AiFillCheckCircle } from 'react-icons/ai';
import { Badge } from '..';

export default { title: 'Components/Badge', component: Badge };

export function Blue() {
  return <Badge title="Lorem ipsum" />;
}

export function Red() {
  return <Badge title="Lorem ipsum" color="red" />;
}

export function BlueWithIcon() {
  return <Badge title="Lorem ipsum" icon={<AiFillCheckCircle />} />;
}

export function RedWithIcon() {
  return <Badge title="Lorem ipsum" icon={<IoIosRemoveCircle />} color="red" />;
}

export function GreenIcon() {
  return <Badge title="Lorem ipsum" icon={<AiFillFileText />} color="green" />;
}
