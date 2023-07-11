<template>
    <div>
        <h6>Deals Corner</h6>
        <v-list-item prepend-icon="fas fa-money-bill" title="Deals" value="Deals" href="/deals"></v-list-item>
        <v-list-item prepend-icon="fas fa-key" title="Exclusives" value="exclusives" href="/categories/exclusives">
        </v-list-item>
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