// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  i18n: {
    localeDetection: false,
    locales: ['en', 'es-es'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['a.storyblok.com'],
  },
  webpack: (config) => {
    applyUrlLoader(config)
    return config
  },
})

const applyUrlLoader = (config) => {
  config.module.rules.push({
    test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 1000000,
    },
  })
}