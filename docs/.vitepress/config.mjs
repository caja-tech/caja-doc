import { defineConfig } from 'vitepress'
import fs from 'fs'

const cajaLang = JSON.parse(fs.readFileSync('./docs/.vitepress/caja.tmLanguage.json', 'utf8'))

export default defineConfig({
  title: "Cajá",
  description: "The modern programming language",
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Modak&display=swap', rel: 'stylesheet' }]
  ],
  markdown: {
    languages: [cajaLang],
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/guide/' },
      { text: 'Samples', link: '/samples/' },
      { text: 'Releases', link: '/releases/' }
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
        text: 'Samples',
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
      { icon: 'github', link: 'https://github.com/caja-tech/caja-cli' }
    ]
  }
})
