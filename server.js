// const express = require('express');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const app = express();
const config = require('./webpack.config.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

const server = new webpackDevServer(compiler, options);


// Serve the files on port 3000.
server.listen(5000, function () {
  console.log('Example app listening on port 5000!\n');
});