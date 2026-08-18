import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Caja",
  description: "The modern programming language",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Samples', link: '/samples/' },
      { text: 'Release Notes', link: '/releases/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Caja?', link: '/guide/' },
          { text: 'Features', link: '/guide/features' }
        ]
      },
      {
        text: 'Code Samples',
        items: [
          { text: 'Examples', link: '/samples/' }
        ]
      },
      {
        text: 'Releases',
        items: [
          { text: 'Release Notes', link: '/releases/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/caja-tech/cajadoc-webpage' }
    ]
  }
})
