// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [ '~/assets/main.css' ],
  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css'
  //       }
  //     ]
  //   }
  // },
  components: [
    {
      path: '@/components',
      pathPrefix: true, // Default True
    },
    {
      path: '@/otherComponents',
      pathPrefix: false, // Default True
    }
  ],
})
