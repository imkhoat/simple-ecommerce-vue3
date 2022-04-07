<template>
    <button class="s-button" :color="color" :size="size" :round="round" :outline="outline">
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
            default: 'base'
        },
        round: {
            type: Boolean,
            default: false
        },
        outline: {
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
    font-weight: 700;
}
.s-button[color="primary"] {
    background-color: #0064fa;
    color: #fff;
}
.s-button[color="primary"]:hover {
    background-color: #0062d6;
}
.s-button[color="secondary"] {
    background-color: #eef2ff;
    color: #0064fa;
}
.s-button[color="secondary"]:hover {
    background-color: #eef2ff;
}
.s-button[color="primary"]:focus {
    outline: 2px solid #98cdfd;
}
.s-button[outline="true"] {
    background-color: #eef2ff !important;
    color: #0064fa !important;
    border: 1px solid #0064fa;
}
.s-button[outline="true"]:hover {
    background-color: #eef2ff;
    border: 1px solid #0062d6;
}
.s-button[size="small"] {
    height: 32px;
    font-size: 14px;
    line-height: 16px;
    padding: 4px 8px;
}
.s-button[size="medium"] {
    height: 36px;
    font-size: 14px;
    line-height: 16px;
    padding: 6px 10px;
}
.s-button[size="base"] {
    height: 42px;
    font-size: 14px;
    line-height: 16px;
    padding: 8px 16px;
}
.s-button[round="true"] {
    border-radius: 100px;
}
</style>