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
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
        <v-col>
          <ecosystemmenu />
        </v-col>

        <v-col>
          <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <a variant="flat" v-bind="props">
                <v-icon start icon="fas fa-user-circle"></v-icon>
              </a>
            </template>
            <v-list>
              <v-row class="accountDropdown">
                <v-col cols="6">
                  <h6>My Account</h6>
                  <v-list-item title="Account" value="Account" append-icon="fas fa-user" href="/Admin/User/">
                  </v-list-item>
                  <v-list-item title="Profile" value="Profile" append-icon="fas fa-id-card" href="/Admin/User/profile">
                  </v-list-item>
                  <v-list-item title="Account" value="Account" append-icon="fas fa-id-card-clip"
                    href="/Admin/User/Account">
                  </v-list-item>
                  <v-list-item title="Addresses" value="Addresses" append-icon="fas fa-address-card"
                    href="/Admin/User/Addresses"></v-list-item>
                  <v-list-item title="History" value="History" append-icon="fas fa-clock-rotate-left"
                    href="/Admin/User/History"></v-list-item>
                  <v-list-item title="My Uploads" value="My Uploads" append-icon="fas fa-upload"
                    href="/Admin/User/my-uploads"></v-list-item>
                  <v-list-item title="Recommendations" value="Recommendations" append-icon="fas fa-thumbs-up"
                    href="/Admin/User/Recommendations"></v-list-item>
                </v-col>

                <v-col cols="6">
                  <h6>My Commerce</h6>
                  <v-list-item title="Orders" value="Orders" append-icon="fas fa-truck-fast" href="/Commerce/Orders">
                  </v-list-item>
                  <v-list-item title="Lists" value="Lists" append-icon="fas fa-list" href="/Admin/User/Lists">
                  </v-list-item>
                  <v-list-item title="Coupons" value="Coupons" append-icon="fas fa-file-invoice"
                    href="/Commerce/Coupons"></v-list-item>
                  <v-list-item title="Receipts" value="Receipts" append-icon="fas fa-receipt" href="/Commerce/Receipts">
                  </v-list-item>
                  <v-list-item title="Events" value="Events" append-icon="fas fa-calendar-check"
                    href="/Commerce/Events"></v-list-item>
                  <v-list-item title="Returns" value="Returns" append-icon="fas fa-rotate-left"
                    href="/Commerce/Returns"></v-list-item>
                  <v-list-item title="Subscriptions" value="Subscriptions" append-icon="fas fa-cart-plus"
                    href="/Commerce/Subscriptions"></v-list-item>
                </v-col>

                <v-col cols="12">
                  <v-divider></v-divider>
                  <v-list-item title="Upload Center" value="Upload Center" append-icon="fas fa-arrow-up-from-bracket"
                    href="/Upload"></v-list-item>
                  <v-divider></v-divider>
                  <v-list-item title="Logout" value="Logout" append-icon="fas fa-right-from-bracket" href="/logout">
                  </v-list-item>
                </v-col>
              </v-row>
            </v-list>
          </v-menu>
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
              <h6>Shop By Category</h6>
              <v-list-group prepend-icon="fas fa-building" v-for="categories in allCategoriesList" :key="categories.id">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Categories"></v-list-item>
                </template>
                <v-list-item :title="categories.name" :value="categories.name" :href="`/categories/${categories.id}`">
                </v-list-item>
              </v-list-group>
              <v-divider></v-divider>
              <h6>Social</h6>
              <v-list-item prepend-icon="fas fa-video" title="Pixanomy Live" value="live" href="/categories/live">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-users" title="Social Feed" value="feed" href="/social/newsfeed">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-people-group" title="Spaces" value="Spaces" href="/social/Spaces">
              </v-list-item>
              <v-divider></v-divider>
              <h6>Department Stores</h6>
              <v-list-item prepend-icon="fas fa-compass-drafting" title="Pixanomy Portfolio" value="Pixanomy Portfolio"
                href="/Portfolio/"></v-list-item>
              <v-list-item prepend-icon="fas fa-person-shelter" title="Pixanomy Canvas" value="Pixanomy Canvas"
                href="/Canvas/"></v-list-item>
              <v-list-item prepend-icon="fas fa-mattress-pillow" title="Artist Haus" value="Artist Haus"
                href="/artisthaus/"></v-list-item>
              <v-list-item prepend-icon="fas fa-message" title="Pixanomy Reviews" value="Pixanomy reviews"
                href="/reviews/">
              </v-list-item>
              <v-list-item prepend-icon="fas fa-tablet-button" title="Pixanomy Market" value="Pixanomy Market"
                href="/categories/Market"></v-list-item>
              <v-divider></v-divider>
              <h6>Deals Corner</h6>
              <v-list-item prepend-icon="fas fa-money-bill" title="Deals" value="Deals" href="/deals"></v-list-item>
              <v-list-item prepend-icon="fas fa-key" title="Exclusives" value="exclusives"
                href="/categories/exclusives"></v-list-item>
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
  import live from '../components/Catbar/live.vue'
  import gql from 'graphql-tag'

  const query = gql `
    query MyQuery {
      allCategoriesList {
        id
        name
      }
}`

  export default {
    data() {
      return {
        components: {
          search,
          ecosystemmenu,
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
    theme.value = theme.value === 'dark' ? 'dark' : 'light'
  };
</script>