import React from 'react';
import { IoIosAlert } from 'react-icons/io';
import { Snackbar } from '..';

export default { title: 'Components/Snackbar', component: Snackbar };

export function Success() {
  return (
    <Snackbar
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      icon={<IoIosAlert />}
      status="success"
      open
    />
  );
}

export function Error() {
  return (
    <Snackbar
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      icon={<IoIosAlert />}
      status="error"
      open
    />
  );
}
