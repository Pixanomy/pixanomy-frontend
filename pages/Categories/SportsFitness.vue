<template>
    <v-card>
        <v-tabs v-model="tab" align-tabs="center">
            <v-tab value="one">Sports</v-tab>
            <v-tab value="two">Fitness</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <sports />
                </v-window-item>

                <v-window-item value="two">
                    <fitness />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import sports from '../../components/SportsFitness/sports.vue'
import fitness from '../../components/SportsFitness/fitness.vue'

    export default {
        components: { sports, fitness }
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi Sports & Fitness',
    })
</script>