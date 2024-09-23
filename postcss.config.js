// eslint-disable-next-line import/no-commonjs
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-rem-to-responsive-pixel': {
      // 默认所有属性都转化
      propList: ['*'],

      // 32 意味着 1rem = 32rpx
      rootValue: 32,
      // 转化的单位,可以变成 px / rpx
      transformUnit: 'rpx',
    },
    tailwindcss: {},
  },
};
