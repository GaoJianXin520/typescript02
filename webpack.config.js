const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false
        }
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/, 
                use: [
                    // {
                    //     loader: 'babel-loader',
                    //     options: {
                    //         presets: [
                    //             '@babel/preset-env',
                    //             {
                    //                 targets: {
                    //                     chrome: '88',
                    //                 },
                    //                 corejs: '3',
                    //                 useBuiltIns: 'usage'
                    //             }
                    //         ]
                    //     }
                    // },
                    'ts-loader'
                ],
                exclude: /node_modlues/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}