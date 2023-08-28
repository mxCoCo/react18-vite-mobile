module.exports = {
  plugins: {
    autoprefixer: {
      // 自动添加浏览器前缀
      overrideBrowserslist: [
        //浏览器版本兼容
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
      ],
    },
    'postcss-pxtorem': {
      // px自动转rem
      rootValue: 37.5, //设计稿是375
      propList: ['*'],
      exclude: /node_modules/i, // 不包含 node_modules 文件
      selectorBlackList: ['css-'], //过滤掉scss-开头的class，不进行rem转换
    },
  },
}
