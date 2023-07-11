<template>
    <div>
        <h6>Shop By Category</h6>
        <v-list-group prepend-icon="fas fa-building" >
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Categories"></v-list-item>
            </template>
            <v-list-item title="photography" value="photography" href="`/categories/`">
            </v-list-item>
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