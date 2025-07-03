import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: 'chunks/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[path][name][ext]'
                }
            }
        ],

    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new CopyWebpackPlugin({ patterns: [{ from: './style/unwrap/unwrap_images/unwrap.svg', to: './style/unwrap/unwrap_images' }, { from: './style/brends/brends_images', to: './style/brends/brends_images'}] }),

    ]
};