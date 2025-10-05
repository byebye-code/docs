import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "88code文档站",
  description: "88code救你于水深火热站",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '官网', link: 'https://www.88code.org/' },
      { text: 'Vscode插件', link: 'https://github.com/byebye-code/vscode-extension' },
      { text: '一键自动配置桌面端', link: 'https://github.com/byebye-code/88code-desktop' },
      { text: 'Claude Code 状态栏工具', link: 'https://github.com/byebye-code/byebyecode' },
    ],
     outline: {
      level: [1, 5], // 提取从 H2 到 H5 的标题
      label: '本页目录' // 自定义目录标题
    },
    notFound: {
      link: '/404',
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
            { text: '更新日志', link: '/88code/release-log' },
            { text: '关于88开源', link: '/88-opensource/introduction' },
          ]
        },
        {
          text: 'ClaudeCode使用教程',
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
          ]
        },
        {
          text: '88开源',
          collapsed: true,
          items: [
            { text: '关于88开源', link: '/88-opensource/introduction' },
          ]
        }
      ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/byebye-code/' }
    ],
    footer: {
      message: 'Copyright © 2025-present 88code',
      copyright: 'MIT Licensed | Copyright © 2025-present 88code'
    },
    search: {
      provider: 'local'
    }
  }
})