const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }]
    },  
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentbase: path.join(__dirname, 'public')
    }
};