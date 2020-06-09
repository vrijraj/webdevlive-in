module.exports = {
  chainWebpack: config=>{
    config.plugins.delete('prefetch')
  },
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Web.dev Live India',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#3F51B5',
    msTileColor: '#3F51B5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: "#ffffff"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}