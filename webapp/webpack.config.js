var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../target'),
        filename: 'web_app_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};