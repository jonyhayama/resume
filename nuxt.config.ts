// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '@/assets/scss/main.scss'
  ],
  app: {
    baseURL: '/resume/',
    head: {
      link: [
        {
          rel:'icon',
          type: 'image/png',
          href:"/favicon.png"
        },
        {
          rel:'stylesheet',
          href:'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
          integrity:'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
