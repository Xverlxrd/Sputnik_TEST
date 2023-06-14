const path = require('path');
const HWP = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CWP = require('copy-webpack-plugin');
const MCEP = require('mini-css-extract-plugin');
const OCAP = require('optimize-css-assets-webpack-plugin')
const TWP = require('terser-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development';

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset){
        opts.presets.push(preset)
    }
    return opts
}


module.exports = {
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './src/index.jsx'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@public': path.resolve(__dirname, 'public'),
            '@styles': path.resolve(__dirname, 'styles')
        },
        extensions: [
            '.js',
            '.png',
            '.jpg',
            '.jsx'
        ]
    },
    devServer: {
        port: 8010,
        hot: isDev
    },
    plugins: [
        new HWP({
            template: './public/index.html',
            // title: 'Sputnik App',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        // new CWP([
        //     from: path.resolve(__dirname, './src/favicon.ico'),
        //     to: path.resolve(__dirname, './dist')
        // ]),
        new MCEP({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MCEP.loader,
                        options: {},
                    },
                    'css-loader' ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions(),
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
        ]
    }
}