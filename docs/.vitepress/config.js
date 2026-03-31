import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '墨宇的科技博客',
  description: '分享计算机科学与技术相关的知识和经验',
  base: '/moyv/',  // 部署到 GitHub Pages 时使用
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术笔记', link: '/notes/' },
      { text: '项目展示', link: '/projects/' },
      { text: '关于我', link: '/about/' }
    ],
    sidebar: {
      '/notes/': [
        { text: 'Python', link: '/notes/python/' },
        { text: 'Web开发', link: '/notes/web/' },
        { text: 'MySQL', link: '/notes/mysql/' }
      ],
      '/projects/': [
        { text: '项目列表', link: '/projects/' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/moyvbjb' },
      { icon: 'mail', link: 'mailto:16626550590@163.com' }
    ],
    footer: {
      message: '使用 VitePress 构建',
      copyright: '© 2026 墨宇的科技博客'
    }
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})