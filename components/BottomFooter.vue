<template>
    <v-footer class="bg-orange-lighten-1 text-center d-flex flex-column">
        <v-row align-content="center">
            <v-col cols="12">
                <h4>The Meeovi Company</h4>
            </v-col>
            <v-col cols="3">
                <v-list-item title="Meeovi" subtitle="" value="" href="https://www.meeovi.com"></v-list-item>
            </v-col>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong><a href="https://www.meeovi.com">Meeovi LLC</a></strong>
            </v-col>
        </v-row>
    </v-footer>
</template>