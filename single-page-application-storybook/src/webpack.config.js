const path = require('path')
const fs = require('fs')

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = [
    {
      test: /\.js$/,
      include: [
        __dirname,
        fs.realpathSync(path.resolve(path.join(__dirname, '..', 'node_modules', 'single-page-application', 'src'))),
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
