const autoprefixer = require('autoprefixer')
const postcssurl = require('postcss-url')
const postcssimport = require('postcss-import')

module.exports = {
  plugins: [
    postcssimport(),
    postcssurl(),
    autoprefixer()
  ]
}
