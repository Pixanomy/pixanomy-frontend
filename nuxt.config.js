import {
  defineNuxtConfig
} from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    //'@sidebase/nuxt-auth',
    '@nuxt/content',
    '@nuxtjs/apollo',
    'nuxt-meilisearch',
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

  runtimeConfig: {
    websiteURL: process.env.GQL_HOST,
    websiteToken: process.env.WEBSITE_TOKEN,
  },

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.GQL_HOST,
      /*  httpLinkOptions: {
          headers: {
            'x-magento-cache-id': process.env.GQL_KEY,
            'x-magento-tags': 'FPC'
          }
        } */
      },
    },
  },

  meilisearch: {
    hostUrl: process.env.HOSTURL,
    searchApiKey: process.env.SEARCH_APIKEY,
    adminApiKey: process.env.ADMIN_APIKEY,
    serverSideUsage: true,
    instantSearch: {
      theme: 'algolia'
    }
  },

  build: {
    transpile: [
      'vuetify',
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