// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    dburl:process.env.DATABASE_URL,
    dbName:process.env.DB_NAME,
  },
  app: {
    pageTransition: { name:"page", mode:"out-in"}
  },
  modules: [
    '@pinia/nuxt',
  ],
})


