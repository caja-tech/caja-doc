import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      let lastScrollY = window.scrollY
      
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY
        
        if (currentScrollY < lastScrollY - 5) {
          document.documentElement.classList.add('nav-scrolling-up')
          document.documentElement.classList.remove('nav-scrolling-down')
        } else if (currentScrollY > lastScrollY + 5) {
          document.documentElement.classList.add('nav-scrolling-down')
          document.documentElement.classList.remove('nav-scrolling-up')
        }
        
        if (currentScrollY <= 0) {
          document.documentElement.classList.remove('nav-scrolling-down')
        }
        
        lastScrollY = currentScrollY
      }, { passive: true })
    }
  }
}
