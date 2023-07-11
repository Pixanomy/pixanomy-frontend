<template>
    <div>
        <v-row>
            <v-col cols="auto">
                <v-dialog v-model="dialog" transition="dialog-top-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn stacked variant="text" size="x-small" v-bind="props" prepend-icon="fas fa-search">Search</v-btn>
                    </template> 
                    <v-card>
                        <v-toolbar color="red-lighten-2" title="Search the Community"></v-toolbar>
                        <v-card-text>
                            <v-text-field density="compact" variant="solo" label="Search"
                                append-inner-icon="fas fa-search" single-line hide-details
                                @click:append-inner="onClick"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" block @click="dialog = false">Close Search</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<script setup>


</script>