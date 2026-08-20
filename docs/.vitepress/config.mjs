import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Cajá",
  description: "The modern programming language",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Modak&display=swap', rel: 'stylesheet' }]
  ],
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

    search: {
      provider: 'local',
      options: {
        placeholder: 'Search documentation...'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/caja-tech/cajadoc-webpage' }
    ],

    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },
  }
})
