/**
 * Created by li on 2018/1/31 17:26.
 */
const {join} = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')

const config = webpackMerge(baseConfig,{

})