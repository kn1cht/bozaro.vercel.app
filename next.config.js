module.exports = {
  env: {
  },
  experimental: {
    css: true,
    granularChunks: true,
    modern: true
  },
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    )
    return config
  }
 }
