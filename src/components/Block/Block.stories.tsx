import React from 'react';
import { Block } from '..';

const GRID_STYLE = {
  background: '#0F52BA',
  color: '#ffffff',
  padding: '20px',
  borderRadius: '4px',
};

export default { title: 'Components/Block', component: Block };

export function Default() {
  return (
    <div>
      <Block mb={30} style={GRID_STYLE}>
        Block
      </Block>
      <Block style={GRID_STYLE}>Block</Block>
    </div>
  );
}
