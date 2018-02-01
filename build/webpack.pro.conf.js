/**
 * Created by li on 2018/2/1 17:12.
 */
const webpackMerge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const baseConfig = require('./webpack.base.conf')

const config = webpackMerge(baseConfig,{
    entry:{
        vendor:['vue'],
    },
    output:{
        filename:'[name].[chunkhash:8].js',
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test:/\.styl/,
                use: ExtractPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader',
                        {
                            loader:'postcss-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        'stylus-loader'
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractPlugin('styles.[contentHash:8].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        })
    ]
})

module.exports = config