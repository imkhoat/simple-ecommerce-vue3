<template>
    <a class="s-link" v-if="isExternal" :href="linkUrl">
        <slot />
    </a>
    <router-link class="s-link" v-else :to="linkUrl">
        <slot />
    </router-link>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    link: {
        type: [String, Object],
        required: true,
    },
})

const isExternal = computed(() => {
    return (typeof props.link === "string" && props.link.startsWith('http'));
})
const linkUrl = computed(() => {
    return props.link;
})
</script>
<style>
.s-link {
    text-decoration: none;
}
</style>