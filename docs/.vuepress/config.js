const { fs, path } = require('@vuepress/shared-utils')
module.exports = ctx => ({

  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Vuepress 模板',
      description: '这里写你博客的副标题。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Vuepress template',
      description: 'The subtitle is written here.'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]

  ],
  port: 3000,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: 'https://github.com/leejiawang',
    repoLabel: 'GitHub',
    editLinks: false,
    editLinkText: '编辑此页',
    sidebar: 'auto',
    lastUpdated: 'Last Updated',

    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/web/': getWebSidebar('教程', '资源'),
          '/untitled/': getUntitledSidebar('自定义分类'),
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/web/': getWebSidebar('Tutorial', 'Resources'),       
          '/en/untitled/': getUntitledSidebar('Custom classification'),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
  ]
})

function getWebSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'markdown',
      ]
    },
  ]
}

function getUntitledSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'untitled-2',
      ]
    },
  ]
}

