<template>
    <div>
        <div class="text-center">
            <v-dialog v-model="dialog" width="auto">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" prepend-icon="fas fa-search" size="x-small" stacked variant="text">Search</v-btn>
                </template>

                <v-card min-height="500" min-width="500">
                    <ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
                        <ais-search-box />
                    </ais-instant-search>
                    <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false">Close Search</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<script setup>


</script>