/**
 * Created by li on 2018/1/31 17:25.
 */
const {join} = require('path')
module.exports = {
    entry:{
        app:join(__dirname,'../client/main.js')
    },
    output: {
        filename: "[name].[hash].js",
        path:join(__dirname,'../dist'),
        publicPath: "/public/"
    },
    resolve: {
        extensions: ['.js','.vue','.jsx']
    },
    module: {

    }
}