const nodeExternals = require('webpack-node-externals');
const path = require('path');
const srcPath = path.resolve(__dirname);
const distPath = path.resolve(__dirname, 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: srcPath,
    entry: './server.js',
    output: {
        path: distPath,
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread'] }
                }],
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            root: '.',
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        }
                    }, 'postcss-loader']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpe?g)$/,
                loaders: ['url-loader?limit=100000&publicPath=/assets/', 'image-webpack-loader?bypassOnDebug']
            },
            //loaders for other file types can go here
        ]
    },
    externals: nodeExternals(),
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};
