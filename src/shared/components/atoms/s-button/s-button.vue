<template>
    <button class="s-button" :color="color" :size="size" :round="round">
        <slot />
    </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Button, ButtonSize } from './type'

export default defineComponent({
    props: {
        color: {
            type: String as PropType<Button>,
            default: 'primary',
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: 'small'
        },
        round: {
            type: Boolean,
            default: false
        }
    }
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