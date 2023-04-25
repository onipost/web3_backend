const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
    return {
        entry: './apps/index.ts',
        mode: env.mode,
        watch: env.mode === 'development',
        watchOptions: {
            ignored: './node_modules/',
        },
        target: 'node',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index.js',
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: ['ts-loader'],
                }
            ],
        },
        externals: [nodeExternals()],
        plugins: [
            new NodemonPlugin(
                {
                    script: './build/index.js',
                    watch: path.resolve('./build'),
                    ignore: [
                        "src",
                        "node_modules"
                    ],
                    verbose: true,
                    env: {
                        NODE_ENV: env.mode,
                    },
                }
            ),
            new Dotenv()
        ]
    }
}