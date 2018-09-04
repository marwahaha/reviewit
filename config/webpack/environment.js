const { environment } = require('@rails/webpacker')
const erb =  require('./loaders/erb')

const webpack = require('webpack');
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
}));

environment.loaders.append('erb', erb)
module.exports = environment
