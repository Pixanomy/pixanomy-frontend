<template>
    <div>
        <profilebar />
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Notifications
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.Notifications }}</td>
            </tr>
        </tbody>
    </v-table>
   </div> 
</template>

<script>
import profilebar from '../../../components/Menus/profilebar.vue'

    export default {
        components: { profilebar },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Notifications',
    });
</script>