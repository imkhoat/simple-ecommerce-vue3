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
    padding: var(--spacer-xs) var(--spacer-sm);
    font-size: var(--font-size--sm);
    border: none;
    border-radius: var(--border-radius-base);
    cursor: pointer;
    font-weight: 700;
}
.s-button[color="primary"] {
    background-color: var(--c-primary);
    color: var(--c-on-primary);
}
.s-button[color="primary"]:hover {
    background-color: var(--c-primary-variant);
}
.s-button[color="secondary"] {
    background-color: var(--c-secondary);
    color: var(--c-on-secondary);
}
.s-button[color="secondary"]:hover {
    background-color: var(--c-secondary);
}
.s-button[color="primary"]:focus {
    outline: 2px solid var(--c-secondary-variant);
}
.s-button[outline="true"] {
    background-color: var(--c-secondary) !important;
    color: var(--c-primary) !important;
    border: 1px solid var(--c-primary);
}
.s-button[outline="true"]:hover {
    background-color: var(--c-secondary);
    border: 1px solid var(--c-primary);;
}
.s-button[size="small"] {
    height: 32px;
    font-size: var(--font-size--sm);
    line-height: 16px;
    padding: var(--spacer-2xs) var(--spacer-xs);
}
.s-button[size="medium"] {
    height: 36px;
    font-size: var(--font-size--sm);
    line-height: 16px;
    padding: var(--spacer-xs);
}
.s-button[size="base"] {
    height: 42px;
    font-size: var(--font-size--sm);
    line-height: 16px;
    padding: var(--spacer-xs) var(--spacer-sm);
}
.s-button[round="true"][size="medium"] {
    min-width: 36px;
    border-radius: var(--border-radius-round)
}
.s-button[round="true"][size="small"] {
    min-width: 32px;
    border-radius: var(--border-radius-round)
}
.s-button[round="true"][size="base"] {
    min-width: 42px;
    border-radius: var(--border-radius-round)
}
</style>