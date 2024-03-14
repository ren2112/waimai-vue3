const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  // publicPath: 'http://localhost:8080/#/home',
  lintOnSave: false,
  transpileDependencies: true,
  css: {
 
    loaderOptions: {
 
      postcss: {

        postcssOptions:{
 
          plugins: [
  
            require('postcss-pxtorem')({ rootValue: 37.5 , propList: ['*']}),

          ],

        },
      }
    },
    
  },
  // 用来引入vant组件（按需引入）
  configureWebpack: {
    plugins: [
      // 当 unplugin-vue-components 版本小于 0.26.0 时，使用以下写法
      // ComponentsPlugin({ resolvers: [VantResolver()] }),
      //当 unplugin-vue-components 版本大于等于 0.26.0 时，使用以下写法
      ComponentsPlugin.default({ resolvers: [VantResolver()] }),
    ],
  },
})
