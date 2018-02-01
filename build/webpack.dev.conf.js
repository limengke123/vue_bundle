/**
 * Created by li on 2018/1/31 17:26.
 */
// const {join} = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')

const config = webpackMerge(baseConfig,{
    module:{
        rules:[
            {
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    devtool:'#cheap-module-eval-source-map',
    devServer:{
        port:8000,
        host:'0.0.0.0',
        overlay:{
            errors:true
        },
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})

module.exports = config