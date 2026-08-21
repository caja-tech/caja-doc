import { defineConfig } from 'vitepress'
import fs from 'fs'

const cajaLang = JSON.parse(fs.readFileSync('./docs/.vitepress/caja.tmLanguage.json', 'utf8'))

export default defineConfig({
  title: "Cajá",
  titleTemplate: ":title - Cajá",
  description: "The modern programming language",
  head: [
    ['link', { rel: 'icon', href: '/logo32x32.svg', type: 'image/svg+xml' }],
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
    logo: '/logo32x32.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction/' },
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Libraries', link: '/libs/' },
      { text: 'Samples', link: '/samples/' },
      { text: 'Releases', link: '/releases/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is Caja?', link: '/introduction/' },
          { text: 'Features', link: '/introduction/features' }
        ]
      },
      {
        text: 'Documentation',
        collapsed: false,
        items: [
          { text: 'Start Here', link: '/documentation/' },
          { text: 'Types', link: '/documentation/types' },
          { text: 'Generics', link: '/documentation/generics' },
          { text: 'Recursion', link: '/documentation/recursion' },
          { text: 'Math Module', link: '/documentation/math' },
          { text: 'String Module', link: '/documentation/string' },
          { text: 'Array Module', link: '/documentation/array' },
          { text: 'Map Module', link: '/documentation/map' },
          { text: 'Date Module', link: '/documentation/date' },
          { text: 'Cast Module', link: '/documentation/cast' },
          { text: 'Log Module', link: '/documentation/log' }
        ]
      },
      {
        text: 'Libraries',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/libs/' },
          { text: 'stdlib', link: '/libs/stdlib' },
          { text: 'query', link: '/libs/query' }
        ]
      },
      {
        text: 'Samples',
        collapsed: false,
        items: [
          { text: 'Examples', link: '/samples/' }
        ]
      },
      {
        text: 'Releases',
        collapsed: false,
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
