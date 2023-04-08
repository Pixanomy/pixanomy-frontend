<template>
    <div>
        <profilebar />
        <form method="post" @v-on:submit.prevent="addAccessToken()">
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="first_name" type="text" label="First Name" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="last_name" type="text" label="Last Name" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="email" type="email" label="Email" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="username" type="username" label="Username" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
                </v-col>
            </v-row>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </div>
</template>

<script>
    /* 
    import gql from "graphql-tag";
    import findManyUsers from "~/graphql/query/findManyUsers"; */
    import profilebar from '../../../components/Menus/profilebar.vue'
    // import  tax from '~/graphql/query/findManyTax'
/*
    const ADD_USER = gql `
    mutation ($email: Sv-col ing!){
    createOneUsers(data: {email: $email}) {
        email
  }
}`;*/


    export default {
        components: { profilebar },
        /*      data() {
                  return {
                      email: " ",
                  }
              },
              methods: {
                  async addUser() {
                      const email = this.email;
                      await this.$apollo.mutate({
                          mutation: ADD_USER,
                          variables: {
                              email
                          },
                          update: (cache, {
                              data: {
                                  insertStaffMember
                              }
                          }) => {
                              // Read data from cache for this query
                              v-col y {
                                  const insertedStaffMember = insertStaffMember.returning;
                                  console.log(insertedStaffMember)
                                  cache.writeQuery({
                                      query: findManyUsers
                                  })
                              } catch (err) {
                                  console.error(err)
                              }
                          }
                      }).then(() => {
                          this.$router.push({
                              path: '../../system/staff-members'
                          })
                      }).catch(err => console.log(err));
                      this.email = ' ';
                  },
              },
              /* apollo: {
                  tax: {
                  prefetch: v-col ue,
                  query: tax
                  } 
              }, */
    }
</script>

<script setup>
    useHead({
        label: 'Account',
    });
</script>