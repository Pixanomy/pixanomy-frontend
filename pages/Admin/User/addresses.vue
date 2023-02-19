<template>
    <div>
      <v-toolbar color="transparent">
        <v-row>
            <v-col cols="9">
                <h5>My Addresses</h5>
            </v-col>
            <v-col cols="2">
                <addAddress />
            </v-col>
        </v-row>
      </v-toolbar>
      <v-table fixed-header>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Addresses
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.Addresses }}</td>
            </tr>
        </tbody>
    </v-table>  
    </div>
    
</template>

<script>
import addAddress from './addAccount/add-address.vue'

    export default {
        components: { addAddress },
        data() {
            return {
                desserts: [{
                        name: 'Frozen Yogurt',
                        Addresses: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        Addresses: 237,
                    },
                    {
                        name: 'Eclair',
                        Addresses: 262,
                    },
                    {
                        name: 'Cupcake',
                        Addresses: 305,
                    },
                    {
                        name: 'Gingerbread',
                        Addresses: 356,
                    },
                    {
                        name: 'Jelly bean',
                        Addresses: 375,
                    },
                    {
                        name: 'Lollipop',
                        Addresses: 392,
                    },
                    {
                        name: 'Honeycomb',
                        Addresses: 408,
                    },
                    {
                        name: 'Donut',
                        Addresses: 452,
                    },
                    {
                        name: 'KitKat',
                        Addresses: 518,
                    },
                ],
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Addresses',
    });
</script>