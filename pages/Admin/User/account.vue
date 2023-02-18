<template>
    <div>
        <form method="post" @v-on:submit.prevent="addAccessToken()">
            <v-table class="table">
                <tbody>
                    <tr>
                        <td style="text-align: right;">First Name</td>
                        <td>
                            <v-text-field v-model="first_name" type="text" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Last Name</td>
                        <td>
                            <v-text-field v-model="last_name" type="text" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Email Address</td>
                        <td>
                            <v-text-field v-model="email" type="email" name="email" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Username</td>
                        <td>
                            <v-text-field v-model="username" type="username" name="username" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Password</td>
                        <td>
                            <v-text-field v-model="password" type="password" name="password" required></v-text-field>
                        </td>
                    </tr>
                </tbody>
            </v-table>
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
        title: 'Account',
    });
</script>