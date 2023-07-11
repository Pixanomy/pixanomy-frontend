<template>
    <div>
        <h6>My Account</h6>
        <v-list-group prepend-icon="fas fa-user-circle" value="My Account">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="My Account"></v-list-item>
            </template>
            <v-list-item title="Account" value="Account" href="/Admin/User/"></v-list-item>
            <v-list-item title="Profile" value="Profile" href="/Admin/User/profile"></v-list-item>
            <v-list-item title="Account" value="Account" href="/Admin/User/Account"></v-list-item>
            <v-list-item title="Addresses" value="Addresses" href="/Admin/User/Addresses"></v-list-item>
            <v-list-item title="History" value="History" href="/Admin/User/History"></v-list-item>
            <v-list-item title="My Uploads" value="My Uploads" href="/Admin/User/my-uploads"></v-list-item>
            <v-list-item title="Notifications" value="Notifications" href="/Admin/User/Notifications"></v-list-item>
            <v-list-item title="Recommendations" value="Recommendations" href="/Admin/User/Recommendations">
            </v-list-item>
            <v-list-item title="Lists" value="Lists" href="/Admin/User/Lists"></v-list-item>
        </v-list-group>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    const query = gql `
  query MyQuery {
    departments {
      id
      name
    }
}`

    export default {

    }
</script>