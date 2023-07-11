<template>
    <div>
        <h6>Department Stores</h6>
        <v-list-item prepend-icon="fas fa-compass-drafting" title="Pixanomy Portfolio" value="Pixanomy Portfolio"
            href="/Portfolio/"></v-list-item>
        <v-list-item prepend-icon="fas fa-person-shelter" title="Pixanomy Canvas" value="Pixanomy Canvas"
            href="/Canvas/"></v-list-item>
        <v-list-item prepend-icon="fas fa-mattress-pillow" title="Artist Haus" value="Artist Haus" href="/artisthaus/">
        </v-list-item>
        <v-list-item prepend-icon="fas fa-message" title="Pixanomy Reviews" value="Pixanomy reviews" href="/reviews/">
        </v-list-item>
        <v-list-item prepend-icon="fas fa-tablet-button" title="Pixanomy Market" value="Pixanomy Market"
            href="/categories/Market"></v-list-item>
        <v-divider></v-divider>
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