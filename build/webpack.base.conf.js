/**
 * Created by li on 2018/1/31 17:25.
 */
const { join } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        app: join(__dirname, '../src/main.js')
    },
    output: {
        filename: "[name].js",
        path: join(__dirname, '../dist'),
        publicPath: "/public/"
    },
    resolve: {
        extensions: ['.js', '.vue', '.jsx']
    },
    module: {
        rules :[
            {
                test : /\.vue$/,
                loader:'vue-loader'
            },
            {
                test : /\.js$/,
                loader:'babel-loader',
                include : join(__dirname , '../src')
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:join(__dirname,'../dist','media/[name].[hash:7].[ext]')
                }
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:join(__dirname,'../dist','fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin()
    ]
}