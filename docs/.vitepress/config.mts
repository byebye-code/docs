import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs',
  lang: 'zh-CN',
  title: "88code文档站",
  description: "88code救你于水深火热站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '官网', link: 'https://www.88code.org/' },
      { text: 'Vscode插件', link: 'https://github.com/byebye-code/vscode-extension' },
      { text: '桌面软件(占位)', link: 'https://github.com/byebye-code/88code-desktop' },
      { text: 'Claude Code 状态栏工具', link: 'https://github.com/byebye-code/CCometixLine' },
    ],

    sidebar: [
        {
          text: '88code站点介绍',
          items: [
            { text: '介绍', link: '/88code站点介绍/介绍' },
            { text: '回到主页', link: '/' },
            { text: 'ClaudeCode指南', link: '/ClaudeCode指南/Windows' },
            { text: 'Codex指南', link: '/Codex指南/Windows' },
            { text: 'Gemini指南', link: '/Gemini指南/Windows' },
            { text: '常见问题解答', link: '/FAQ/faq' },
            { text: '88code套餐和计费说明', link: '/88code套餐和计费说明/说明' },
            { text: '关于88code开源', link: '/关于88code开源/开源介绍' }
          ]
        },
        {
          text: 'ClaudeCode指南',
          collapsed: false,
          items: [
            { text: 'Windows', link: '/ClaudeCode指南/Windows' },
            { text: 'Linux', link: '/ClaudeCode指南/Linux' },
            { text: 'Mac', link: '/ClaudeCode指南/Mac' },
            { text: 'Vscode', link: '/ClaudeCode指南/Vscode' },
          ]
        }, 
        {
          text: 'Codex指南',
          collapsed: false,
          items: [
            { text: 'Windows', link: '/Codex指南/Windows' },
            { text: 'Linux', link: '/Codex指南/Linux' },
            { text: 'Mac', link: '/Codex指南/Mac' },
            { text: 'Vscode', link: '/Codex指南/Vscode' },
            { text: 'Jetbrains', link: '/Codex指南/Jetbrains' },
          ]
        },
        {
          text: 'Gemini指南',
          collapsed: false,
          items: [
            { text: 'Windows', link: '/Gemini指南/Windows' },
            { text: 'Linux', link: '/Gemini指南/Linux' },
            { text: 'Mac', link: '/Gemini指南/Mac' },
            { text: 'Vscode', link: '/Gemini指南/Vscode' },
            { text: 'Jetbrains', link: '/Gemini指南/Jetbrains' },
          ]
        },
        {
          text: '常见问题解答',
          collapsed: false,
          items: [
            { text: '常见问题解答', link: '/FAQ/faq' },
          ]
        },
        {
          text: '88code套餐和计费说明',
          collapsed: false,
          items: [
            { text: '88code套餐和计费说明', link: '/88code套餐和计费说明/说明' },
          ]
        },
        {
          text: '关于88code开源',
          collapsed: false,
          items: [
            { text: '关于88code开源', link: '/关于88code开源/开源介绍' },
          ]
        }
      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/byebye-code/' }
    ]
  }
})