var path = require('path');
var DIRS = {
  public: 'public',
  app: 'app',
  bundleName: 'bundle.js'
};

// Plugins
var WebpackNotifierPlugin = require('webpack-notifier');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var plugins = [
  new WebpackNotifierPlugin(),
  new LiveReloadPlugin()
];

// Server
var devServer = {
  contentBase: DIRS.public,
  port: 3000,
  host: '0.0.0.0',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  proxy: {
    '/api/*': {
      target: 'http://gosensi.com',
      secure: false
    }
  }
};

var prefixer = '!autoprefixer-loader?browsers=last 2 versions';

// Loaders
var loaders = [{
  test: /\.css$/,
  loader: 'style!css' + prefixer
}, {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}, {
  test: /\.json[0-9]?$/,
  loader: 'json-loader'
}, {
  test: /\.html$/,
  loader: 'ng-cache?prefix=[dir]/[dir]'
}, {
  test: /\.png$/,
  loader: 'url?name=img/[name].[ext]&mimetype=image/png'
}, {
  test: /\.gif$/,
  loader: 'url?name=img/[name].[ext]&mimetype=image/gif'
}, {
  test: /\.scss$/,
  loader: 'style!css' + prefixer + '!sass'
}];

module.exports = {
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  context: __dirname + '/app',
  entry: path.resolve(__dirname, DIRS.app),
  devServer: devServer,
  output: {
    path: path.resolve(__dirname, devServer.contentBase),
    filename: DIRS.bundleName
  },
  module: {
    loaders: loaders,
    preloader: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }]
  },
  plugins: plugins
};

// added sourcemaps
module.exports.devtool = 'source-map';
