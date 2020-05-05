module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions/register', '@storybook/addon-links/register', '@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
