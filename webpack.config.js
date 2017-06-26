const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: {
            index: './index-main.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread', 'async-to-promises'] }
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
            // {
            //     test: /\.(css|scss)$/,
            //     loaders: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 //sourceMap: true,
            //                 importLoaders: 1,
            //                 root: '.',
            //                 localIdentName: '[path][name]__[local]--[hash:base64:5]'
            //             }
            //         },
            //         'postcss-loader',
            //         //'sass-loader',
            //     ]
            // },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpe?g)$/,
                loaders: ['url-loader?limit=100000&publicPath=/assets/', 'image-webpack-loader?bypassOnDebug']
            },
            //loaders for other file types can go here
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
}