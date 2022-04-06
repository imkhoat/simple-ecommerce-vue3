<template>
    <img class="s-image" :src="src" />
</template>
<script setup lang="ts">
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
})
</script>
<style>
.s-image {
    width: 100%;
    height: 100%;
}
</style>