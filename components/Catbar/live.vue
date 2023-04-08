<template>
    <div class="livebar">
        <v-card variant="plain">
            <v-tabs v-model="tab" center-active>
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto">
                            <template v-slot:activator="{ props }">
                                <v-avatar icon="fas fa-plus" color="info" size="50" v-bind="props">
                                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                                </v-avatar>
                            </template>
                            <v-card>
                                <video src=""></video>
                                <v-card-actions>
                                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>
                <v-tab>
                    <div class="text-center">
                        <v-dialog v-model="dialog" width="auto">
                            <template v-slot:activator="{ props }">
                                <v-avatar v-bind="props" size="50">
                                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                                </v-avatar>
                            </template>

                            <v-card>
                                <video src=""></video>
                                <v-card-actions>
                                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-tab>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            tab: null,
            dialog: false,
        }),
    }
</script>