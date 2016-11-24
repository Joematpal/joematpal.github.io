module.exports= {
  entry:
    './src/index.jsx'
  ,
  output: {
    path:__dirname,
    filename:'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/
        , exclude: /node_modules/
        , loader: 'babel'
        , query: {
          presets: ["es2015", "react"]
        }
      }
      , {
        test: /\.scss$/
        , exclude: /node_modules/
        , loader: 'style-loader!css-loader!sass-loader'
      }
      , {
        test: /\.(png|jpe?g)$/
        , loader: 'file-loader?name=images/[name].[ext]'
      }
      , {
        test: /\.woff$/
        , loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  }
  , resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
