import React from 'react';
import { Modal } from '..';

export default { title: 'Components/Modal', component: Modal };

export function Default() {
  return (
    <Modal
      title="This is modal"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      orem ipsum dolor sit amet, consectetur adipiscing elit"
      buttonText="Click here"
    />
  );
}
