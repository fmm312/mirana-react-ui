import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextField } from '..';

export default { title: 'Components/TextField', component: TextField };

export function Default() {
  return <TextField placeholder="Type here" />;
}

export function StartIcon() {
  return <TextField placeholder="Type here" startIcon={<AiOutlineSearch />} />;
}

export function Error() {
  return <TextField placeholder="Type here" error />;
}

export function Disabled() {
  return <TextField placeholder="Type here" disabled />;
}
