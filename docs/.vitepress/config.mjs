import { defineConfig } from 'vitepress'
import fs from 'fs'

const cajaLang = JSON.parse(fs.readFileSync('./docs/.vitepress/caja.tmLanguage.json', 'utf8'))

let releaseSidebarItems = []
try {
  const res = await fetch('https://api.github.com/repos/caja-tech/caja-cli/releases', {
    headers: { 'X-GitHub-Api-Version': '2022-11-28' }
  })
  if (res.ok) {
    const releases = await res.json()
    releaseSidebarItems = releases.map(r => ({
      text: r.name || r.tag_name,
      link: `/releases/${r.tag_name}`
    }))
  }
} catch (e) {
  console.error('Failed to fetch releases for sidebar', e)
}

export default defineConfig({
  title: "Cajá",
  titleTemplate: ":title - Cajá",
  description: "Meet cajá, a programming language made to ship code fast.",
  head: [
    ['link', { rel: 'icon', href: '/logo32x32.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Modak&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap', rel: 'stylesheet' }]
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
      { text: 'Use Cases', link: '/use-cases/' },
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
          { text: 'std', link: '/libs/stdlib' },
          { text: 'query', link: '/libs/query' }
        ]
      },
      {
        text: 'Use Cases',
        collapsed: false,
        items: [
          { text: 'Showcase', link: '/use-cases/' },
          { text: 'E-Commerce', link: '/use-cases/ecommerce' },
          { text: 'Revenue', link: '/use-cases/revenue' },
          { text: 'Finance', link: '/use-cases/financial' }
        ]
      },
      {
        text: 'Releases',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/releases/' },
          ...releaseSidebarItems
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
