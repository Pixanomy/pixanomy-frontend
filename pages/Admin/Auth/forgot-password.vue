<template>
    <div>
        <form method="post" @v-on:submit.prevent="addAccessToken()">
            <v-table class="table">
                <tbody>
                    <tr>
                        <td style="text-align: right;">Enter Email</td>
                        <td>
                            <v-text-field v-model="email" type="email" name="email" hint="Enter your email so we can send you your password reset link" required></v-text-field>
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </div>
</template>

<script>
    /* 
    import gql from "graphql-tag";
    import findManyUsers from "~/graphql/query/findManyUsers";
    // import  tax from '~/graphql/query/findManyTax'

    const ADD_USER = gql `
    mutation ($email: String!){
    createOneUsers(data: {email: $email}) {
        email
  }
}`;*/

    export default {
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
                        try {
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
            prefetch: true,
            query: tax
            } 
        }, */
    }
</script>

<script setup>
    useHead({
        title: 'Forgot Password',
    });
</script>