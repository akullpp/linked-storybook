const path = require('path')
const fs = require('fs')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = [
    {
      test: /\.js$/,
      include: [
        __dirname,
      ],
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react'],
        babelrc: false,
      },
    },
  ]
  return defaultConfig
}
