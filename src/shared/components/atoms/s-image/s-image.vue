<template>
    <div class="s-image" :style="`background-image: url(${src});`" />
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
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>