<template>
    <v-card>
        <v-tabs style="background-color: transparent" center-active>
            <v-tab><a href="/Admin/User/profile">Profile</a></v-tab>
            <v-tab><a href="/Admin/User/">Feed</a></v-tab>
            <v-tab><a href="/Admin/User/followersfollowing">Followers / Following</a></v-tab>
            <v-tab><a href="/Admin/User/lists">Lists</a></v-tab>
            <v-tab><a href="/Commerce/orders">Orders</a></v-tab>
            <v-tab><a href="/Commerce/returns">Returns</a></v-tab>
            <v-tab><a href="/Commerce/coupons">Coupons</a></v-tab>
            <v-tab><a href="/Commerce/receipts">Receipts</a></v-tab>
            <v-tab><a href="/Commerce/subscriptions">Subscriptions</a></v-tab>
            <v-tab><a href="/Admin/User/addresses">Addresses</a></v-tab>
            <v-tab><a href="/Admin/User/history">History</a></v-tab>
            <v-tab><a href="/Admin/User/my-uploads">My Uploads</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {

    }
</script>