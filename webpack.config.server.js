const nodeExternals = require('webpack-node-externals'),
    path = require('path'),
    srcPath = path.resolve(__dirname),
    distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    entry: './src/server/server.js',
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
            }
            //loaders for other file types can go here
        ]
    },
    externals: nodeExternals(),
    devtool: 'source-map'
};
