// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  mode: 'static',
  app: {
    baseURL: '/my-portfolio/',
    buildAssetsDir: 'assets',
    head: {
      title: 'TusoTr',
      meta: [
        {
          name: 'TusoTr Portfolio',
          content: "Hello my name is Song, I make website!!!"
        },
        { property: 'og:title', content: 'TusoTr' },
        { property: 'og:description', content: 'Hello my name is Song, I make website!!!' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
      ],

      link: [
        { rel:"icon", href:"images/favicon.ico", sizes:"32x32" },
        { rel: "stylesheet", type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
      ],
      script: [
        {
          src: "https://smtpjs.com/v3/smtp.js",
        }
      ]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "./plugins/aos.client.ts", ssr: false }],
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url))
  },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
})
