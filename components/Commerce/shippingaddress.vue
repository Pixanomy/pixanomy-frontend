<template>
    <div>
        <form method="post" @v-on:submit.prevent="addAddress()">
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="name" id="addressName" label="Address Name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea v-model="content" label="Description" id="addressDescription">
                            </v-textarea>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="meta_title" label="Meta Name" id="addressName"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="meta_keywords" label="Meta Keywords"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea v-model="meta_description" label="Meta Description" id="addressDescription">
                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>

</script>