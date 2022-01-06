const { description } = require('../../package')

module.exports = {
  base: '/notes/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'HUI NOTES',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    repo: 'ChingHuiHui/notes',
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      {
        text: 'Posts',
        link: '/posts/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/posts/': [
        {
          title: 'VuePress',
          collapsable: true,
          children: [
            '',
            'getting-started',
            'create-new-page',
            'markdown',
            'using-vue-in-markdown'
          ]
        },
        {
          title: 'TBC',
          collapsable: true,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
