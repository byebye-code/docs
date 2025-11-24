import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "88code文档站",
  description: "平价 AI 编码中转站 - 救你于水深火热",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#FF7F50' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: '88code - 平价 AI 编码中转站' }],
    ['meta', { property: 'og:site_name', content: '88code 文档站' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '官网', link: 'https://www.88code.org/' },
      { text: '自动配置命令行版', link: '/FAQ/88code-auto-config' },
      { text: '一键自动配置桌面端', link: '/88-opensource/88code-desktop' },
      { text: '实用工具', link: '/88-opensource/introduction' },
    ],
    outline: {
      level: [1, 5],
      label: '本页目录'
    },
    notFound: {
      link: '/',
      linkLabel: '返回首页'
    },
    sidebarMenuLabel: '目录',
    sidebar: [
      {
        text: '88code站点介绍',
        items: [
          { text: '介绍', link: '/88code/introduction' },
          { text: '常见问题解答', link: '/FAQ/faq' },
          { text: '套餐和计费说明', link: '/88code/pricing' },
          { text: '详细计费规则', link: '/88code/credit-rules' },
          { text: '更新日志', link: '/88code/release-log' },
          { text: '关于88开源', link: '/88-opensource/introduction' },
        ]
      },
      {
        text: 'Claude Code使用教程',
        collapsed: false,
        items: [
          { text: 'Windows', link: '/ClaudeCode/Windows' },
          { text: 'Linux', link: '/ClaudeCode/Linux' },
          { text: 'Mac', link: '/ClaudeCode/Mac' },
          { text: 'Vscode', link: '/ClaudeCode/Vscode' },
          { text: 'KiloRooCode', link: '/ClaudeCode/KiloRooCode' },
        ]
      },
      {
        text: 'Codex使用教程',
        collapsed: true,
        items: [
          { text: 'Windows', link: '/Codex/Windows' },
          { text: 'Linux', link: '/Codex/Linux' },
          { text: 'Mac', link: '/Codex/Mac' },
          { text: 'Vscode', link: '/Codex/Vscode' },
          { text: 'Jetbrains', link: '/Codex/Jetbrains' },
        ]
      },
      {
        text: 'Droid使用教程',
        link: '/Droid/introduction',
      },
      {
        text: 'Gemini使用教程',
        collapsed: true,
        items: [
          { text: 'Windows', link: '/Gemini/Windows' },
          { text: 'Linux', link: '/Gemini/Linux' },
          { text: 'Mac', link: '/Gemini/Mac' },
          { text: 'Vscode', link: '/Gemini/Vscode' },
          { text: 'Jetbrains', link: '/Gemini/Jetbrains' },
        ]
      },
      {
        text: '常见问题解答',
        collapsed: true,
        items: [
          { text: '常见问题解答', link: '/FAQ/faq' },
          { text: 'CC SWITCH使用教程', link: '/FAQ/CC_SWITCH' },
          { text: '88自动配置命令行版', link: '/FAQ/88code-auto-config' },
          { text: '88自动配置桌面版', link: '/FAQ/88code-Desktop' },
        ]
      },
      {
        text: '88开源',
        collapsed: true,
        items: [
          { text: '关于88开源', link: '/88-opensource/introduction' },
          { text: 'byebyecode体验教程', link: '/88-opensource/byebyecode' },
          { text: 'VSCode状态栏插件', link: '/88-opensource/vscode-extension' },
          { text: 'CCLine-88CC statuline简洁版', link: '/88-opensource/ccline-88cc' },
          { text: '自动配置教程', link: '/88-opensource/88code-desktop' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/byebye-code/' }
    ],
    footer: {
      message: 'Made with ❤️ by 88code Team',
      copyright: 'MIT Licensed | Copyright © 2025-present 88code'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/byebye-code/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
