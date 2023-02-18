<template>
    <v-card>
        <v-tabs v-model="tab" style="background-color: indianred; color: white;" center-active>
            <v-tab>
                <v-list-item title="What's New" value="" href="/categories/new"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Books" value="" href="/categories/books"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Music" value="" href="/categories/music"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Theater" value="" href="/categories/theater"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Games" value="" href="/categories/games"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Podcasts" value="" href="/categories/podcasts"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Sports & Fitness" value="" href="/categories/sportsfitness"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Newsfeed" value="" href="/social/newsfeed"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Groups" value="" href="/social/groups"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Coupons" value="" href="/commerce/coupons"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Crafts" value="" href="/crafts/"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Yardsale" value="" href="/yardsale/"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Exclusives" value="" href="/commerce/exclusives"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Songwriter's Corner" value="" href="/categories/songwriters"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Events" value="" href="/categories/events"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="What's Live" value="" href="/categories/live"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Returns & Orders" value="" href="/commerce/returns/"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Buy Again" value="" href="/commerce/buyagain/"></v-list-item>
            </v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            location: 'bottom',
            tab: null,
        }),
    }
</script>