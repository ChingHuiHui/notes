# Using Vue in Markdown
[[toc]]

## Templating

### Interpolation

```
{{ 1 + 1 }}
```

### Directives

```html
<span v-for="i in 3">{{ i }} </span>
```

就像平常寫 vue 一樣！

### Access to Site & Page Data

可以 output 一些資訊（site metadata, computed properties）

```
{{ $page }}
```

```json
{ "title": "Using Vue in Markdown", 
  "frontmatter": {}, 
  "regularPath": "/posts/using-vue-in-markdown.html", "relativePath": "posts/using-vue-in-markdown.md", 
  "key": "v-51a738c6", 
  "path": "/posts/using-vue-in-markdown.html", 
  "headers": [ 
    { 
      "level": 2, 
      "title": "Templating", 
      "slug": "templating" 
    }, 
    { 
      "level": 3, 
      "title": "Interpolation", 
      "slug": "interpolation" 
    }, 
    { 
      "level": 3, 
      "title": "Directives", 
      "slug": "directives" 
    }, 
    { 
      "level": 3, 
      "title": "Access to Site & Page Data", 
      "slug": "access-to-site-page-data" 
      } 
    ] 
  }
```

## Escaping
今天如果想要 print 出 {{}}，很直覺的給他加上``，但發現整個頁面會壞掉

```md
`{{ This will be displayed as-is }}`
```

這時候 `v-pre` 可以幫助我們！

```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Using Components

很方便的一個功能就是，可以直接用 vue component 放進 md 裏面！這對本來就是熟悉用 vue 的開發者，是再方便不過了！

<demo-component/>
<other-component/>
<Foo-Bar/>

### component 也可以用在 Headers 上！

#### 像是這樣拉（我是一個header喔） <header-link link="google.com" title="我是component"/> ！！！

### Script & Style Hoisting
可以直接在目前的 md 加上 script or style

<div class="block">COLORFUL</div>

```html
<style>
  .block {
    border: 1px solid;
    color: red;
    padding: 1rem;
  }
</style>
```

<style>
  .block {
    border: 1px solid;
    color: red;
    padding: 1rem;
  }
</style>

```html
<script>
  alert('hui')
</script>
```

## Built-In Components
### OutboundLink
接續在 external link後

### ClientOnly
Browser API Access Restrictions
>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the universal code requirements. In short, make sure to only access Browser / DOM APIs in beforeMount or mounted hooks.

如果 component 沒有 SSR-friendly，就需要將他用 `ClientOnly` 包住


```html
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

### Content
在客製化layout或要自定義theme會使用到

#### Markdown slot 
-> 跟在 vue 裡面使用的 slot 很像！

在 layout 中我們有兩個區塊(header, footer)是讓 md 來提供
```html
<template>
  <div class="container">
    <header>
      <Content slot-key="header"/>
    </header>
    <main>
      <Content/>
    </main>
    <footer>
      <Content slot-key="footer"/>
    </footer>
  </div>
</template>
```

對應各自的 slot-key

```md
::: slot header
# Here might be a page title
:::

- A Paragraph
- Another Paragraph

::: slot footer
Here's some contact info
:::
```

最後就會產生以下..

```html
<div class="container">
  <header>
    <div class="content header">
      <h1>Here might be a page title</h1>
    </div>
  </header>
  <main>
    <div class="content default">
      <ul>
        <li>A Paragraph</li>
        <li>Another Paragraph</li>
      </ul>
    </div>
  </main>
  <footer>
    <div class="content footer">
      <p>Here's some contact info</p>
    </div>
  </footer>
</div>
```

### Badge <Badge text="beta" type="warning"/> <Badge text="error" type="error"/> <Badge text="default theme"/>

type: `"tip"|"warning"|"error"`
