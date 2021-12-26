module.exports = {
  stories: ['../src/**/*.stories.@(mdx|tsx)'],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      docs: true,
    }
  }]
};
