<template>
    <div>
        <reviewbar />
        <v-row class="categoryPage" style="background-color: rebeccapurple;">
            <v-col cols="12">
                <h4>Newest Reviews</h4>
                <v-sheet class="mx-auto categorySheet">
                    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                        <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                            <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200"
                                width="100" @click="toggle">
                                <v-img class="align-end text-white" height="200"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                </v-img>
                                <div class="d-flex fill-height align-center justify-center">
                                    <v-scale-transition>
                                        <v-icon v-if="isSelected" color="white" size="48"
                                            icon="mdi-close-circle-outline"></v-icon>
                                    </v-scale-transition>
                                </div>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row class="productPage">
            <v-col cols="3">
                <a href="">
                    <v-card class="mx-auto" max-width="300">
                        <v-img class="align-end text-white" height="200"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                        </v-img>

                        <v-card-title class="pt-4">
                            Review Name
                        </v-card-title>

                        <v-card-text>
                            <div>By: Author</div>

                            <div>Excerpt</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="green">
                                Read More
                            </v-btn>

                            <v-btn color="green" href="/Blog/id">
                                Share
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>
        <latestproducts />
        <bestsellers />
        <relatedauthors />
    </div>
</template>

<script>
    import reviewbar from '../../components/Menus/reviewbar.vue'
    import latestproducts from '../../components/Related/latestproducts.vue'
    import bestsellers from '../../components/Related/bestsellers.vue'
    import relatedauthors from '../../components/Creators/relatedauthors.vue'

    export default {
        components: {
            reviewbar,
            latestproducts,
            bestsellers,
            relatedauthors
        },
        data(){
            return {
                model: null,
            }
        }
    }
</script>

<script setup>
    useHead({
        title: 'Pixanomy Reviews',
    })
</script>