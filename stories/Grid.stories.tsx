import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../src/components';

const GRID_STYLE = {
  background: '#0F52BA',
  color: '#ffffff',
  padding: '20px',
  borderRadius: '4px',
};

storiesOf('Grid', module)
  .add('Column', () => (
    <Grid direction="column" spacing={10}>
      <div style={GRID_STYLE}>Grid</div>

      <div style={GRID_STYLE}>Grid</div>

      <div style={GRID_STYLE}>Grid</div>
    </Grid>
  ))
  .add('Row', () => (
    <Grid direction="row" spacing={10}>
      <div style={GRID_STYLE}>Grid</div>

      <div style={GRID_STYLE}>Grid</div>

      <div style={GRID_STYLE}>Grid</div>
    </Grid>
  ));
