import { create } from '@storybook/theming';
import logo from '../assets/logo.png';

export default create({
  base: 'light',
  
  colorSecondary: '#3b7dd8',

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

   // UI
  appBg: '#F6F9FC',
  appContentBg: '#fafafa',
  appBorderColor: '#3b7dd8',

  // Text colors
  textColor: 'rgb(27, 24, 28)',

  // Toolbar default and active colors
  barTextColor: 'rgb(153, 153, 153)',
  barSelectedColor: '#3b7dd8',
  barBg: '#ffffff',

  brandTitle: 'Oceanic React UI',
  // brandUrl: 'https://somapay.com.br/',
  brandImage: logo
});