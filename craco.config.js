/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const {CracoAliasPlugin} = require('react-app-alias');

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath:
          process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
      },
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    },
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/styles/variables.scss";
          @import "src/assets/styles/mixins.scss";
        `,
        sassOptions: {
          includePaths: ['src'],
        },
      },
    },
  },
};
