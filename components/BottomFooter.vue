<template>
    <div class="text-center">
        <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
                <v-btn class="feedButton" icon="fas fa-plus" color="orange" title="Post to Social Feed" v-bind="props">
                </v-btn>
            </template>

            <v-card>
                <v-textarea title="What's happening?" variant="underlined"></v-textarea>
                <v-row>
                    <v-col cols="4">
                        <v-file-input prepend-icon="fas fa-image" accept="image/*"></v-file-input>
                    </v-col>
                    <v-col cols="4">
                        <v-file-input prepend-icon="fas fa-video" accept="video/*"></v-file-input>
                    </v-col>
                    <v-col cols="4">
                        <v-btn title="Post" color="info">Post</v-btn>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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