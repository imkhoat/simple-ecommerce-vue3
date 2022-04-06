<template>
    <a v-if="isExternal" :href="linkUrl">
        <slot />
    </a>
    <router-link v-else :to="linkUrl">
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
.s-button {
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}
.s-button[color="primary"] {
    background-color: #0064fa;
    color: #fff;
}
.s-button[color="primary"]:hover {
    background-color: #0062d6;
}
.s-button[color="primary"]:focus {
    outline: 2px solid #98cdfd;
}
.s-button[size="small"] {
    height: 32px;
    font-size: 14px;
    line-height: 16px;
    padding: 4px 8px;
}
.s-button[round="true"] {
    border-radius: 100px;
}
</style>