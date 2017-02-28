var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './apps/index.tsx',
    output: {
        path: './dist',
        filename: 'bundle-[chunkhash].js'
    },
    resolve: {
        mainFields: ['main', 'web'],
        modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
        extensions: ['.web.js', '.js', '.json', '.ts', '.tsx', '.css'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            //'react-addons-css-transition-group': 'rc-css-transition-group'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel-loader?presets[]=es2015&cacheDirectory',
                    'ts-loader',
                ],
                exclude: [/\.(spec|e2e|d)\.ts$/]
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                            minimize: false
                        }
                    },
                    "postcss-loader" // has separate config, see postcss.config.js nearby
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendor-manifest.json')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new HtmlWebpackPlugin({
            dev: false,
            favicon: './favicon.ico',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyURLs: true,
                minifyCSS: true
            },
            filename: 'index.html',
            template: './index.ejs'
        })
    ]
};