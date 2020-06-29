console.log('hi');
console.log(process.env.NODE_ENV)


module.exports = {
  outputDir: 'docs',
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'prod' ? '/dragonbank/' : '/',
  pwa: {
    name: 'prototypePWA',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    },
  },
}