---
sidebarDepth: 1
title: vuepress
---

<div align="center"> 
<img src="https://vuepress.vuejs.org/hero.png" width=200 />
</div>

> **Vue-powered** Static Site Generator </br>**Related site：**[Vuepress Official Website](https://vuepress.vuejs.org)、[Vuepress Repositories](https://github.com/vuejs/vuepress)。

## 第1步 安装 Vuepress 框架

首先新建并进入博客文件夹` test `在终端中输入如下代码：
```   
mkdir test
cd test
```

::: tip <i class="fa fa-exclamation-circle"></i> 提示
命令中`test`是所创建的网站文件夹名称，由用户自定义，以下网站名均由`test`代指。
:::

### yarn 安装

可使用 yarn 或者 npm 进行安装，但推荐使用 [yarn](https://www.yarnpkg.com/zh-Hans/) 安装 ，因为 yarn 更稳定，出错几率更少，在终端内输入如下命令全局安装 Vuepress。
```   
yarn global add vuepress
```
### npm 安装

在终端内输入如下命令全局安装 Vuepress。
```   
npm install -g vuepress
```
由于国内可能会有网络受限的问题，使用` npm `会出现安装极慢或者安装失败，可以用` cnpm `替代。使用如下命令安装` cnpm `:
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
npm install -g vuepress
然后使用` cnpm `替换命令中的`npm`，例如使用` cnpm install -g hexo-cli `全局安装 vuepress。

::: warning <i class="fa fa-exclamation-triangle"></i> 注意
执行安装操作前 macOS 用户终端输入` sudo su `命令并密码获取系统权限，Windows 用户以管理员身份运行` CMD `获取系统权限。
:::

## 第2步 建立基本目录结构

### 克隆仓库

新手可以通过克隆框架仓库来快速建立目录结构，这样不容易出问题，下面是一个仅包含 Vuepress 基本结构的 GitHub 仓库。
```
https://github.com/sanyuan0704/vuepress-blog.git
```
### 创建

你也可以自己创建全新的站点，参考官方给的目录结构创建相关文件夹和文件，下面是 [Vuepress 文档](https://vuepress.vuejs.org/zh/guide/) 推荐的目录结构。
```   
test
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

## 第3步 网站配置

网站配置文件 `.vuepress/config.js`，配置最基本的标题与页面描述。
```
module.exports = {
  title: 'XXX',
  description: 'XXXX'
}
```


## 第4步 添加页面

在 `docs` 文件夹内添加新页面，页面内容采用 [Markdown](/web/markdown.html) 格式。



## 第5步 运行网站

在终端中输入如下命令生成网页。浏览器访问 [localhost:3000](http://localhost:3000) 预览效果，关闭预览使用组合键 `Ctrl+C` 退出当前命令。
```
yarn run docs:dev
```

## 第6步 生成静态网页

在终端中输入如下命令生成静态网页。
```
yarn run docs:build
```

## 第7步 部署 Github Pages

执行此操作前请确保拥有Github账号，并创建一个以 `XXX.github.io`命名的空仓库，其中 `XXX` 为你的 Github 用户名，修改 `docs/.vuepress/config.js` 文件中 `base`配置信息。
``` js
base: '/',
```
如果你创建了其他名字的仓库，则 `base` 按如下格式填写，代码中`XXX` 为你的 Github 用户名，`XXXX`为仓库名。
``` js
base: https://XXX.github.io/XXXX/,
```
在 Vuepress 根目录创建 `deploy.sh` 文件，其内容如下，**高亮区域只保留一条**。

``` sh {17,20}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://XXX.github.io
git push -f git@github.com:XXX/XXX.github.io.git master

# 如果发布到 https://XXX.github.io/XXXX
git push -f git@github.com:XXX/XXXX.git master:gh-pages

cd -
```

浏览器输入 `http://XXX.github.io` 实现远程访问。

::: tip <i class="fa fa-exclamation-circle"></i> 提示
本文所使用的 Github Pages 并非部署网页的唯一途径，你也可以使用 Coding 和  Gitee 等。
::: 


