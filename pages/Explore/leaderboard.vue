<template>
    <div>
        <exploremenu />
        <v-toolbar title="Leaderboard" color="green"></v-toolbar>
        <v-row class="exploreContainer">
            <v-col cols="4">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        Number 10
                    </v-card-subtitle>

                    <v-card-text>
                        <div>Whitehaven Beach</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="green">
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import exploremenu from '../../components/Menus//exploremenu.vue'

    export default {
        components: {
            exploremenu
        }
    }
</script>

<script setup>
    useHead({
        title: 'Leaderboard',
    })
</script>