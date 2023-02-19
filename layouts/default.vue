<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      <template v-slot:prepend>
        <v-btn variant="flat" @click="drawer = !drawer">
          <v-icon start icon="fas fa-bars"></v-icon> Browse
        </v-btn>
      </template>

      <v-app-bar-title><a class="logobrand" href="/">
          <v-icon start icon="fas fa-photo-film"></v-icon>Pixanomy
        </a></v-app-bar-title>

      <v-text-field density="compact" variant="solo" label="Search the community" append-inner-icon="fas fa-search"
        single-line hide-details @click:append-inner="onClick"></v-text-field>
      <v-spacer></v-spacer>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col>
          <v-btn title="Change the background color" :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"
            @click="onClick"></v-btn>
        </v-col>
        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props" title="Notifications">
                <v-icon start icon="fas fa-bell"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col>
          <ecosystemmenu />
        </v-col>

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn variant="flat" v-bind="props" title="The Meeovi Company Products">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item title="Account" value="Account" href="/Admin/User/"></v-list-item>
              <v-list-item title="Profile" value="Profile" href="/Admin/User/profile"></v-list-item>
              <v-list-item title="Account" value="Account" href="/Admin/User/Account"></v-list-item>
              <v-list-item title="Addresses" value="Addresses" href="/Admin/User/Addresses"></v-list-item>
              <v-list-item title="History" value="History" href="/Admin/User/History"></v-list-item>
              <v-list-item title="My Uploads" value="My Uploads" href="/Admin/User/my-uploads"></v-list-item>
              <v-list-item title="Notifications" value="Notifications" href="/Admin/User/Notifications"></v-list-item>
              <v-list-item title="Recommendations" value="Recommendations" href="/Admin/User/Recommendations">
              </v-list-item>
              <v-list-item title="Lists" value="Lists" href="/Admin/User/Lists"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="Logout" value="Logout" href="/logout"></v-list-item>
            </v-list>
          </v-menu>
        </v-col>

        <v-col>
          <v-btn variant="flat" href="/commerce/cart" title="Shopping Cart">
            <v-icon start icon="fas fa-shopping-cart"></v-icon>
          </v-btn>
        </v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-navigation-drawer class="sidebarSection" v-model="drawer" temporary>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Profile" nav>
              <template v-slot:append>
                <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
              <h6>Explore</h6>
              <v-list-group prepend-icon="fas fa-compass" value="Explore">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Explore"></v-list-item>
                </template>
                <v-list-item title="Explore" value="Explore" href="/Explore/"></v-list-item>
                <v-list-item title="Visuals" value="Visuals" href="/Explore/visuals"></v-list-item>
                <v-list-item title="Leaderboard" value="Leaderboard" href="/Explore/Leaderboard"></v-list-item>
                <v-list-item title="Collections" value="Collections" href="/Explore/Collections"></v-list-item>
                <v-list-item title="Themes" value="Themes" href="/Explore/Themes"></v-list-item>
                <v-list-item title="Journals" value="Journals" href="/Explore/Journals"></v-list-item>
                <v-list-item title="Challenges" value="Challenges" href="/Explore/Challenges"></v-list-item>
              </v-list-group>
              <v-divider></v-divider>
              <h6>Shop By Department</h6>
              <v-list-group prepend-icon="fas fa-building">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Shop by Department"></v-list-item>
                </template>
                <v-list-item title="Categories Home" value="Categories" href="/categories/"></v-list-item>
                <v-list-item title="picBooks" value="picBooks" href="/categories/picbooks"></v-list-item>
              </v-list-group>
              <v-divider></v-divider>
              <h6>Social</h6>
              <v-list-item prepend-icon="fas fa-video" title="Pixanomy Live" value="live" href="/categories/live">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-users" title="Social Feed" value="feed" href="/social/newsfeed">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-people-group" title="Groups" value="groups" href="/social/groups">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-tablet-button" title="Studio" value="Studio" href="/product/Studio/">
              </v-list-item>
              <v-divider></v-divider>
              <h6>Deals</h6>
              <v-list-item prepend-icon="fas fa-tablet-button" title="Deals" value="Deals" href="/deals"></v-list-item>
              <v-divider></v-divider>
              <h6>My Account</h6>
              <v-list-group prepend-icon="fas fa-user-circle" value="My Account">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="My Account"></v-list-item>
                </template>
                <v-list-item title="Account" value="Account" href="/Admin/User/"></v-list-item>
                <v-list-item title="Profile" value="Profile" href="/Admin/User/profile"></v-list-item>
                <v-list-item title="Account" value="Account" href="/Admin/User/Account"></v-list-item>
                <v-list-item title="Addresses" value="Addresses" href="/Admin/User/Addresses"></v-list-item>
                <v-list-item title="History" value="History" href="/Admin/User/History"></v-list-item>
                <v-list-item title="My Uploads" value="My Uploads" href="/Admin/User/my-uploads"></v-list-item>
                <v-list-item title="Notifications" value="Notifications" href="/Admin/User/Notifications"></v-list-item>
                <v-list-item title="Recommendations" value="Recommendations" href="/Admin/User/Recommendations">
                </v-list-item>
                <v-list-item title="Lists" value="Lists" href="/Admin/User/Lists"></v-list-item>
              </v-list-group>
            </v-list>

            <v-spacer></v-spacer>

            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
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
  import catbar from '../components/Catbar/categories.vue'
  import live from '../components/Catbar/live.vue'

  export default {
    data() {
      return {
        components: {
          search,
          ecosystemmenu,
          catbar,
          live
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
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>