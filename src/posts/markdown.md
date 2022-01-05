---
title: use markdown in VuePress
description: use markdown in VuePress
lang: zh-TW
date: 2022-01-05
permalink: /:year/:month/:day/:slug
navbar: true
sidebar: true
search: true
tags:
  - tags
  - markdown
---

# Markdown

[[toc]]

# Frontmatter

> The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. -- [https://jekyllrb.com/docs/front-matter/](/https://jekyllrb.com/docs/front-matter//)
 
```
---
title: use markdown in VuePress
description: use markdown in VuePress
lang: zh-TW
navbar: true
sidebar: true
prev: '/'
next: '/config/'
search: false
tags: ['posts', 'markdown']
---
```

## Predefined Variables

### title 
可以看到旁邊的sidebar和分頁標籤的title都會改為設定的文字！

### description
改本頁面的 meta description

### meta

```
---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

也可以直接去加入 meta tag

### lang
定義此頁面的語言

### layout
定義此頁面的layout

### [permalink](/https://vuepress.vuejs.org/guide/permalinks.html/)

> A permalink is a URL that is intended to remain unchanged for a long time

**Default: /:regular**

```
date: 2022-01-05
permalink: /:year/:month/:day/:slug
```

設定完可以發現這頁的 url 變成了 `http://localhost:8080/2022/01/05/markdown/`

----

可以用 [Global Computed](/https://vuepress.vuejs.org/guide/global-computed.html/) 來抓取一些資訊！ (`$site`、`$page`、`$frontmatter`)


## Predefined Variables Powered By Default Theme

### navbar & sidebar && search
決定要不要顯示

## prev & next
決定下方的上一頁和下一頁要去哪

## tags
用來定義此頁面的tag，讓搜尋的時候可以多個選擇！



## Some Features

### GitHub-Style Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### [Emoji](/https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json/)

:stuck_out_tongue_winking_eye:

:sunny:
:sunny:
:sunny:

:sun_with_face:
:sun_with_face:
:sun_with_face:

### Table of Contents
```
[[toc]]
```

### Custom Container

::: tip
This is a tip
:::

::: tip for custom title
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
js code

```js
console.log('Hello, VuePress!')
```
:::

### Syntax Highlighting in Code Blocks

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

#### Line Highlighting in Code Blocks

```
  ```js{4}
```

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```
  ```js{1,6-7}
```

``` js{1,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

可以去設定要不要 line numbers 

```js
// config.js

module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

## Advanced Configuration
可以透過 config 去客製化 `markdown-it` (Markdown renderer)

```js
module.exports = {
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```