<template>
    <div class="settingsCard">
        <v-card>
            <v-toolbar color="primary">
                <v-toolbar-title>Account Overview</v-toolbar-title>
            </v-toolbar>
            <div>
                <v-tabs v-model="tab" color="primary">
                    <v-tab value="option-1">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        Account
                    </v-tab>
                    <v-tab value="option-2">
                        <v-icon start>
                            mdi-lock
                        </v-icon>
                        Addresses
                    </v-tab>
                    <v-tab value="option-3">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        History
                    </v-tab>
                    <v-tab value="option-4">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Lists
                    </v-tab>
                    <v-tab value="option-5">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        My Uploads
                    </v-tab>
                    <v-tab value="option-6">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Recommendations
                    </v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <account />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <addresses />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <history />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <lists />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-5">
                            <v-card flat>
                                <uploads />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-6">
                            <v-card flat>
                                <recommendations />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>

            </div>
        </v-card>
    </div>
</template>

<script>
    import account from './account.vue'
    import addresses from './addresses.vue'
    import history from './history.vue'
    import lists from './lists.vue'
    import uploads from './my-uploads.vue'
    import recommendations from './recommendations.vue'

    export default {
        components: {
            account,
            addresses,
            history,
            lists,
            uploads,
            recommendations
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Account',
    })
</script>

<style scoped>

</style>