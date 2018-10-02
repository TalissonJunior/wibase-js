const path = require('path');
const merge = require('webpack-merge');
const common = require('../webpack.config.js');

module.exports = merge(common, {
    output: {
        filename: 'wibase.js',
        path: path.resolve(__dirname, '../.tmp')
    },
    mode: 'development',
    devtool: 'inline-source-map'
});