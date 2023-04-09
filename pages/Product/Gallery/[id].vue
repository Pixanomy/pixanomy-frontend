<template>
    <div class="productPage">
        <v-row>
            <v-col cols="8">
                <v-card>
                    <v-carousel show-arrows="hover" hide-delimiters>
                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover>
                        </v-carousel-item>
                    </v-carousel>
                </v-card>

                <v-row>
                    <v-col cols="8">
                        <v-btn prepend-icon="fas fa-star" variant="plain" title="Add to Favorites">Add to Favorites
                        </v-btn>
                    </v-col>

                    <v-col cols="4">
                        <v-btn prepend-icon="fas fa-download" variant="plain" title="Download"></v-btn>
                        <v-btn prepend-icon="fas fa-share" variant="plain" title="Share on social"></v-btn>
                        <v-btn prepend-icon="fas fa-flag" variant="plain" title="Report"></v-btn>
                    </v-col>

                    <v-spacer></v-spacer>
                    <v-col cols="12">
                        <v-card class="mx-auto" title="Creator Name" subtitle="Published"
                            text="This is content description" variant="plain"
                            prepend-avatar="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-card>
                    </v-col>

                    <v-col cols="3">
                        <v-btn variant="plain" prepend-icon="fas fa-star">
                            783 Favorites
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </v-col>

                    <v-col cols="3">
                        <v-btn variant="plain" prepend-icon="fas fa-comments">
                            90 Comments
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </v-col>

                    <v-col cols="3">
                        <v-btn variant="plain" prepend-icon="fas fa-eye">
                            61.7K Views
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </v-col>

                    <v-col cols="12">
                        <v-form action="" ref="form" v-model="form">
                            <v-textarea v-model="comment" clearable label="Leave A Comment"
                                prepend-icon="fas fa-comments" variant="outlined"></v-textarea>
                            <v-card-actions>
                                <v-btn variant="text" @click="$refs.form.reset()">
                                    Clear
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn :loading="isLoading" color="green">
                                    Submit
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-col>

                    <v-col cols="12">
                        <v-list lines="one" variant="tonal">
                            <v-list-item title="Comment Title" subtitle="Comment Date"
                                prepend-avatar="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
                                comment description
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="4">
                <relatedsidebar />
            </v-col>
        </v-row>
        <relatedgallery />
    </div>
</template>

<script>
    import relatedgallery from '../../../components/Related/relatedgallery.vue'
    import relatedsidebar from '../../../components/Product/relatedsidebar.vue'

    export default {
        components: {
            relatedgallery,
            relatedsidebar
        },
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
        title: '',
    })
</script>