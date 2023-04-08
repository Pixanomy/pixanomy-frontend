import {
  defineNuxtConfig
} from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{
        src: process.env.NUXT_PUBLIC_UMAMI_HOST,
        async: true,
        'data-website-id': process.env.NUXT_PUBLIC_UMAMI_ID
      }],
    },
  },

  extends: ['@sidebase/core'],

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/web/assets/mobirise-icons/mobirise-icons.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/tether/tether.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/parallax/jarallax.css',
    'assets/theme/css/style.css',
    'assets/gallery/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/commerce/css/ui.css',
    'assets/styles/styles.css',
  ],

  modules: [
    'nuxt-graphql-client',
    //'@sidebase/nuxt-auth',
    '@nuxt/content',
    'nuxt-meilisearch',
    'nuxt-directus',
    //'nuxt-medusa',
  ],

  /*auth: {
    strategies: {
      local: false,
      keycloak: {
        scheme: "oauth2",
        endpoints: {
          authorization:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/auth",
          token:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/token",
          userInfo:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/userinfo",
          logout:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/logout?redirect_uri=" +
            encodeURIComponent("127.0.0.1"),
        },
        token: {
          property: "access_token",
          type: "Bearer",
          name: "Authorization",
          maxAge: 300,
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: "code",
        grantType: "authorization_code",
        clientId: process.env.KEYCLOAK_CLIENTID,
        scope: ["openid", "profile", "email"],
        codeChallengeMethod: "S256",
      },
    },
    redirect: {
      login: "/Admin/Auth/login",
      // logout: "/login",
      home: "/index.vue",
    },
  }, */

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      token: process.env.DIRECTUS_TOKEN,
    }
  },

/*  medusa: {
    baseUrl: process.env.MEDUSA_URL,
    publishableApiKey: process.env.PUBLISHABLE_API_key,
    maxRetries: 3,
    global: true,
    server: false
  }, */

  meilisearch: {
    hostUrl: process.env.HOSTURL,
    searchApiKey: process.env.SEARCH_APIKEY,
    adminApiKey: process.env.ADMIN_APIKEY,
    serverSideUsage: true,
    instantSearch: {
      theme: 'algolia'
    }
  },

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST,
      'graphql-client': {
        watch: true,
        autoImport: true,
        functionPrefix: 'Gql',
        documentPaths: ['./graphql/queries/'],
        preferGETQueries: false
      },
    }
  },



  build: {
    transpile: [
      'vuetify',
      '@apollo/client',
      'ts-invariant/process',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})