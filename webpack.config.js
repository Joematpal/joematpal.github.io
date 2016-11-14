module.exports= {
  entry:
    './src/index.jsx'
  ,
  output: {
    path:__dirname + "/public",
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
        test: /\.scss/
        , exclude: /node_modules/
        , loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
  , resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
