import React from 'react';
import { Grid } from '..';

const GRID_STYLE = {
  background: '#0F52BA',
  color: '#ffffff',
  padding: '20px',
  borderRadius: '4px',
};

export default { title: 'Components/Grid', component: Grid };

export function Column() {
  return (
    <Grid direction="column" spacing={10}>
      <div style={GRID_STYLE}>Grid</div>
      <div style={GRID_STYLE}>Grid</div>
      <div style={GRID_STYLE}>Grid</div>
    </Grid>
  );
}

export function Row() {
  return (
    <Grid direction="row" spacing={10}>
      <div style={GRID_STYLE}>Grid</div>
      <div style={GRID_STYLE}>Grid</div>
      <div style={GRID_STYLE}>Grid</div>
    </Grid>
  );
}
