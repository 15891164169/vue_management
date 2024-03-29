module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        // '@': 'src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'plugins': '@/plugins',
        'views': '@/views'
      }
    }
  }
}
