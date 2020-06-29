console.log('hi');
console.log(process.env.NODE_ENV)


module.exports = {
  outputDir: 'docs',
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'prod' ? '/dragonbank/' : '/'
}