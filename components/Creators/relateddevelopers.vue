<template>
    <div>
        <v-sheet class="mx-auto sliderCreators">
        <h4>Check out these Developers</h4>
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="100"
                    @click="toggle">
                    <v-img class="align-end text-white" height="200"
                        src="../../assets/images/face5.jpg" cover>
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
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>

</script>