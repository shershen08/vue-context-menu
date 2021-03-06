var webpack = require( 'webpack' )

module.exports = {
    entry: "./build/common.js",
    output: {
        filename: "bundle.js",
        path: __dirname
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
                ,
                options: {
                    loaders: {
                        js: 'babel-loader',//!eslint-loader
                        css: 'css-loader',//sass-loader
                    },
                },
            }
        ]
    }
}