<template>
    <div class="uploadPage">
        <v-toolbar title="Upload Your Product" color="green"></v-toolbar>
        <v-card>
            <v-form action="" ref="form" v-model="form">
                <v-text-field label="Name"></v-text-field>
                <v-select chips label="Category" multiple :items="['Image', 'Video', 'Digital Product', 'Physical Product']"></v-select>
                <v-textarea label="Description"></v-textarea>
                <v-file-input label="Upload File" multiple></v-file-input>
                <v-card-actions>
                    <v-btn variant="text" @click="$refs.form.reset()">
                        Clear
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :loading="isLoading" color="green">
                        Upload
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            form: false,
            isLoading: false,
            rules: {
                email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
                length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
                password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                    'Password must contain an upper case letter, a numeric character, and a special character',
                required: v => !!v || 'This field is required',
            },
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Upload Center',
    })
</script>