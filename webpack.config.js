const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = (env = {}) => {
    const isProduction = env.production === true
    const isDevelopment = env.development
    return {
        devtool: (() => {
            if (isProduction) return 'cheap-module-source-map'
            else return 'cheap-module-eval-source-map'
        })(),
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        module: {
            rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'react-hot-loader',
                        'babel-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader'],
                        publicPath: "/dist"

                    })
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader']
                }
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.css'],
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(isProduction),
                DEVELOPMENT: JSON.stringify(isDevelopment)
            }),
            new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
            new ExtractTextPlugin({
                disable: true,
            }),
        ],
        devServer: {
            contentBase: './dist',
            historyApiFallback: true
        }

    }
    if (isProduction) {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
            new ExtractTextPlugin({
                filename: 'bundle.css',
                disable: false,
                allChunks: true
            }),
            new webpack.optimize.AggressiveMergingPlugin({
                minSizeReduce: 1,
                moveToParents: true

            })
        )
    }
}