<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-camera"></v-icon> Menu
        </v-btn>
      </template>

      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start icon="fas fa-images"></v-icon>Pixanomy
        </a></v-app-bar-title>

        <v-btn prepend-icon="fas fa-home" size="x-small" stacked variant="text" href="/">Home</v-btn>
        <search />
        <v-btn prepend-icon="fas fa-tv" size="x-small" stacked variant="text" href="/categories/visuals">Visuals</v-btn>
        <v-btn prepend-icon="fas fa-photo-film" size="x-small" stacked variant="text" href="/explore/">Explore</v-btn>
        <v-btn prepend-icon="fas fa-arrow-up-from-bracket" size="x-small" stacked variant="text" href="/upload">Upload</v-btn>
        <v-btn prepend-icon="fas fa-bell" size="x-small" stacked variant="text" href="/notifications">Notifications</v-btn>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <ecosystemmenu />
        </v-col>

        <v-col>
          <topaccountmenu />
        </v-col>

        <v-col>
          <a variant="flat" href="/commerce/cart">
            <v-icon start icon="fas fa-shopping-cart"></v-icon>
          </a>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>

            <v-list density="compact" nav>
              <h6>Trending</h6>
              <v-list-item prepend-icon="fas fa-cart-plus" title="What's New" value="What's New" href="/categories/new">
              </v-list-item>
              <v-divider></v-divider>
              
              <categoriesmenu />
              <v-divider></v-divider>

              <h6>Social</h6>
              <v-list-item prepend-icon="fas fa-video" title="Pixanomy Live" value="live" href="/categories/live">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-users" title="Social Feed" value="feed" href="/social/newsfeed">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-people-group" title="Spaces" value="Spaces" href="/social/Spaces">
              </v-list-item>
              <v-divider></v-divider>
              
              <departmentsmenu />
              <v-divider></v-divider>

              <dealsmenu />
              <v-divider></v-divider>
              
              <accountmenu />

            <v-spacer></v-spacer>

            <v-row>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Help" prepend-icon="fas fa-question-circle" size="x-small"
                    href="https://help.meeovi.com/categories/pixanomy">Help</v-btn>
                </v-col>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Change Background"
                  :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick" size="x-small">Dark
                    Mode</v-btn>
                </v-col>
                <v-col cols="4">
                  <v-btn variant="text" stacked title="Logout" prepend-icon="fas fa-right-from-bracket" size="x-small"
                    href="/logout">Logout</v-btn>
                </v-col>
              </v-row>
            </v-list>
          </v-navigation-drawer>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <live />
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script>
  import search from '../components/Search/search.vue'
  import ecosystemmenu from '../components/Menus/ecosystemmenu.vue'
  import live from '../components/Catbar/live.vue'
  import categoriesmenu from '../components/Menus/categoriesmenu.vue'
  import departmentsmenu from '../components/Menus/departmentsmenu.vue'
  import accountmenu from '../components/Menus/accountmenu.vue'
  import dealsmenu from '../components/Menus/dealsmenu.vue'
  import topaccountmenu from '../components/Menus/TopMenu/topaccountmenu.vue'

  export default {
    data() {
      return {
        components: {
          search,
          ecosystemmenu,
          live,
          categoriesmenu,
          departmentsmenu,
          accountmenu,
          dealsmenu,
          topaccountmenu
        },
        drawer: null,
        location: 'bottom',
        rail: true,
        loaded: false,
        loading: false,
      }
    },

    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },


  }
</script>

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('dark')

  function onClick() {
    theme.value = theme.value === 'dark' ? 'dark' : 'light'
  };
</script>