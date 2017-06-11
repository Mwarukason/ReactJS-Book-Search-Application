module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/ /*stop run the whole package*/
     }
    ]
  },

  /*webpack use*/
  devServer:{
    port:8000,
    contentBase: './build',
    inline:true /*allows to run automatic web updates*/
  }
}
