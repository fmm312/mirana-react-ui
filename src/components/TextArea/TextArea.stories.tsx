import React from 'react';
import { TextArea } from '..';

export default { title: 'Components/TextArea', component: TextArea };

export function Default() {
  return <TextArea placeholder="Type here" rows={4} />;
}

export function Error() {
  return <TextArea placeholder="Type here" error rows={4} />;
}

export function Disabled() {
  return <TextArea placeholder="Type here" disabled rows={4} />;
}
