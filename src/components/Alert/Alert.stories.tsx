import React from 'react';
import { Alert } from '..';

export default { title: 'Components/Alert', component: Alert };

export function Default() {
  return (
    <Alert title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
  );
}

export function Error() {
  return (
    <Alert
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      error
    />
  );
}

export function Warning() {
  return (
    <Alert
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      warning
    />
  );
}
