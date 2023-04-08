<template>
    <v-sheet class="mx-auto sliderProducts">
        <h4>Latest Products</h4>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="250" width="250"
                    @click="toggle">
                    <v-img class="align-end text-white" height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                    </v-img>
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" size="48" icon="mdi-close-circle-outline"></v-icon>
                        </v-scale-transition>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
    export default {
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>

</script>