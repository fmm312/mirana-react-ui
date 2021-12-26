import { addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';

import theme from './theme';

import './reset.css';

addParameters({
  options: {
    theme,
    showRoots: true,
  },
});

addDecorator(withInfo);
addDecorator(centered);
