const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
                use: 'ts-loader',
                exclude: /node_modlues/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin();
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}