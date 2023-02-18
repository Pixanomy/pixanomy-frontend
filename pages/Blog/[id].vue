<template>
    <div>

        <relatedpost />
    </div>
</template>

<script>
import relatedpost from '../../components/Related/relatedposts.vue'

export default {
    components: { relatedpost },
}
</script>

<script setup>
    useHead({
        title: '',
    })
</script>