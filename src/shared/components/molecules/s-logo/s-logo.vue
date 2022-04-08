<template>
    <div class="s-logo">
        <s-link link="/" class="logo">
            <img src="../../../assets/icons/shopping_bag.svg" alt="Brand logo" />
        </s-link>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import SLink from '../../atoms/s-link/s-link.vue'
export default defineComponent({
    components: {
        SLink
    }
})
</script>
<style>
.s-logo .logo img{
    height: 48px;
    width: 48px;
    fill: var(--c-primary);
}
</style>