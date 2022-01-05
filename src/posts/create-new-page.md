

# Create New Page

[[toc]]

## [Directory Structure](/https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing/)

先看看如果用 `create-vuepress-site` 後 VuePress 的 資料夾結構！

```
.
├── docs
│   ├── .vuepress (Optional)
│   │   ├── components (Optional)
│   │   ├── theme (Optional)
│   │   │   └── Layout.vue
│   │   ├── public (Optional)
│   │   ├── styles (Optional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (Optional, Danger Zone)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (Optional)
│   │   └── enhanceApp.js (Optional)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   │   └── using-vue.md
│   ├── config
│   │   └── README.md
│   |
└── package.json
```

可以看到 default 幫我們產生了 guide 和 config folder（ 內有 md file )，所以這正是我們一開始有的頁面！

## Links

1. /guide/ -> 會看到 guide/README.md
2. /guide/using-vue.html -> 會看到 guide/using-vue.md

### Internal Links

在 VuePress，內部連結會被轉成 `<roter-link>`（ 因為要 SPA )，在 sub-directory 會將底下的 `README.md` 和 `index.md` 自動地轉成 `index.html` ( URL -> `/` )

> 一開始頁面載入完後，Vue就會接管靜態的內容將他變成一個 Single Page Application（SPA)。

>A VuePress site is in fact a SPA powered by Vue, Vue Router and webpack。


## Create New Page
打這麼多，所以到底怎麼建立新的頁面，其實就很直覺，就在建立一個新的 directory 就好拉！哈哈 ～
如果想要新增一個 posts，就依照之前辦理就行了！

```.
├── docs
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   │   └── using-vue.md
│   ├── config
│   │   └── README.md
│   ├── posts
│   │   └── README.md
└── package.json
```

這時只要進到 `http://localhost:8080/posts/` ，一樣就可以看到底下 README.md 的內容了！

## Nav & Sidebar

但可以發現新增的頁面，旁邊並沒有之前頁面有的 sidebar，可以到 config 去做設定！

```js
// config.js

module.exports = {
  ...
  themeConfig: {
    ...,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      },
      {
        text: 'Posts',
        link: '/posts/'
      },
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
          title: 'Posts',
          collapsable: true,
          children: [
            '',
            'getting-started',
            'create-new-page'
          ]
        }
      ],
    }
  },
}

```

首先可以看到 nav，是用來調整上方的 navbar，而 sidebar 的地方就可以把新加入的頁面和他的 children 放進去，可以設定他顯示在 sidebar 的 title，還有加入 children 們，也可以讓他是 collapsable ( dropdown 的感覺 )

children 內的空字串就是 index.html!


## Config

既然都碰到 config 了，來看一下裡頭。

```js

const { description } = require('../../package')

module.exports = {
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
   ...
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
```

可以在 config 定義網站的 title, description, 和一些 meta data！如果有 plugin 要去做使用，也在 config 中去定義。

[Basic Config](/https://vuepress.vuejs.org/config/#basic-config/)