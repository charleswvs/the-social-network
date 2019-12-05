const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // 'src/index.js' would do, but windows may not understand it
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'),
  },
  module:{
    rules:[
      {
        test: /\.js$/,  // reg expression: any js archive
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.css/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      },{
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}