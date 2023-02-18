<template>
    <v-card>
        <v-tabs class="livebar" v-model="tab" center-active>
            <v-tab><v-avatar icon="fas fa-plus" color="info" size="40"></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="40"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            tab: null,
        }),
    }
</script>