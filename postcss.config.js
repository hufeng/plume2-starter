/**
 * postcss setting
 * http://postcss.parts/ postcss插件
 */

module.exports = {
  plugins: {
    'postcss-import': {
      root: __dirname,
    },
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-cssnext': {
       browsers: ['last 2 versions', '> 5%'],
    },
  },
};