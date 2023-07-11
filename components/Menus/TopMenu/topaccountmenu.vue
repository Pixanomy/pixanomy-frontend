<template>
    <div>
        <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
                <a variant="flat" v-bind="props">
                    <v-icon start icon="fas fa-user-circle"></v-icon>
                </a>
            </template>
            <v-list>
                <v-row class="accountDropdown">
                    <v-col cols="6">
                        <h6>My Account</h6>
                        <v-list-item title="Account" value="Account" append-icon="fas fa-user" href="/Admin/User/">
                        </v-list-item>
                        <v-list-item title="Profile" value="Profile" append-icon="fas fa-id-card"
                            href="/Admin/User/profile">
                        </v-list-item>
                        <v-list-item title="Account" value="Account" append-icon="fas fa-id-card-clip"
                            href="/Admin/User/Account">
                        </v-list-item>
                        <v-list-item title="Addresses" value="Addresses" append-icon="fas fa-address-card"
                            href="/Admin/User/Addresses"></v-list-item>
                        <v-list-item title="History" value="History" append-icon="fas fa-clock-rotate-left"
                            href="/Admin/User/History"></v-list-item>
                        <v-list-item title="My Uploads" value="My Uploads" append-icon="fas fa-upload"
                            href="/Admin/User/my-uploads"></v-list-item>
                        <v-list-item title="Recommendations" value="Recommendations" append-icon="fas fa-thumbs-up"
                            href="/Admin/User/Recommendations"></v-list-item>
                    </v-col>

                    <v-col cols="6">
                        <h6>My Commerce</h6>
                        <v-list-item title="Orders" value="Orders" append-icon="fas fa-truck-fast"
                            href="/Commerce/Orders">
                        </v-list-item>
                        <v-list-item title="Lists" value="Lists" append-icon="fas fa-list" href="/Admin/User/Lists">
                        </v-list-item>
                        <v-list-item title="Coupons" value="Coupons" append-icon="fas fa-file-invoice"
                            href="/Commerce/Coupons"></v-list-item>
                        <v-list-item title="Receipts" value="Receipts" append-icon="fas fa-receipt"
                            href="/Commerce/Receipts">
                        </v-list-item>
                        <v-list-item title="Events" value="Events" append-icon="fas fa-calendar-check"
                            href="/Commerce/Events"></v-list-item>
                        <v-list-item title="Returns" value="Returns" append-icon="fas fa-rotate-left"
                            href="/Commerce/Returns"></v-list-item>
                        <v-list-item title="Subscriptions" value="Subscriptions" append-icon="fas fa-cart-plus"
                            href="/Commerce/Subscriptions"></v-list-item>
                    </v-col>

                    <v-col cols="12">
                        <v-divider></v-divider>
                        <v-list-item title="Upload Center" value="Upload Center"
                            append-icon="fas fa-arrow-up-from-bracket" href="/Upload"></v-list-item>
                        <v-divider></v-divider>
                        <v-list-item title="Logout" value="Logout" append-icon="fas fa-right-from-bracket"
                            href="/logout">
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                location: 'bottom',
            }
        }
    }
</script>

<script setup>

</script>