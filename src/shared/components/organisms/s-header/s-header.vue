<template>
    <div class="s-header">
        <header class="s-header-wrapper">
            <s-logo></s-logo>
            <div class="aside"></div>
            <div class="search"></div>
            <div class="actions">
                <s-link link="/">
                    <s-button :outline="true">Home</s-button>
                </s-link>
                <s-link link="/cart">
                    <s-button :outline="true">Cart</s-button>
                </s-link>
            </div>
        </header>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import SButton from '../../atoms/s-button/s-button.vue'
import SLink from '../../atoms/s-link/s-link.vue'
import SLogo from '../../molecules/s-logo/s-logo.vue'

export default defineComponent({
    components: {
        SButton,
        SLink,
        SLogo
    }
})
</script>
<style>
.s-header {
    padding: 12px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
.s-header .s-header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
}
.s-header-wrapper .actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
}
</style>