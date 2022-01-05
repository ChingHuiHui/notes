# Getting Started

<!-- table of content -->

[[toc]]

## Quick Start

最快的方式直接用 [create-vuepress-site generator](/https://github.com/vuepress/create-vuepress-site/)，來直接 build 出官方給我們的一個模板！

<code-group>
<code-block title="YARN" active>
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>

之後會詢問我們一些對於 site 的 configure（ Project name, Description, Maintainer Email, Maintainer Name, Repository URL）

```bash
cd docs
yarn install & yarn dev
```

## Manual Installation

當然也可以選擇手動的方式來建立自己的 VuePress！

1. 建立新的 directory

```bash
mkdir vuepress-starter && cd vuepress-starter
```

2. init package manager，這裡使用 yarn

```bash
yarn init
```

3. install VuePress

```bash
yarn install -D vuepress
```

**如果要在本來的專案引進 VuePress 就直接來到step3就行了！**

4. 建立第一個doc

```bash
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

5. 到 `package.json` 加入 scripts

```json
 "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  },
```

6. 打開來！！！！！
   
```bash
yarn dev
```

**VuePress 會default 在8080，啟動hot-reloading dev server**



就 4 這麼 EZ :-D