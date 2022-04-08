<template>
    <a class="s-link" v-if="isExternal" :href="linkUrl">
        <slot />
    </a>
    <router-link class="s-link" v-else :to="linkUrl">
        <slot />
    </router-link>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        link: {
            type: [String, Object],
            required: true,
        },
    },
    setup(props) {
        const isExternal = computed(() => {
            return (typeof props.link === "string" && props.link.startsWith('http'));
        })
        const linkUrl = computed(() => {
            return props.link;
        })

        return { isExternal, linkUrl }
    }


})
</script>
<style>
.s-link {
    text-decoration: none;
}
</style>