<template>
    <v-card>
        <v-tabs v-model="tab" style="background-color: indianred; color: white;" center-active>
            <v-tab>
                <v-list-item title="All" value="" href="/categories/new"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Books" value="" href="/categories/books"></v-list-item>
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