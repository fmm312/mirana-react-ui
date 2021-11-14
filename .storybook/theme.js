import { create } from '@storybook/theming';

export default create({
  base: 'light',
  
  colorSecondary: '#3b7dd8',

  // Typography
  fontBase: '"DM Sans", sans-serif',
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

  brandTitle: 'Sum DS',
  // brandUrl: 'https://somapay.com.br/',
  // brandImage: 'https://s3-eu-west-1.amazonaws.com/tap-user-uploads/5eebf6c157579.39941600%201592522432'
});