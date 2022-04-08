<template>
    <div class="s-textbox" :class="{ 'disabled': disabled }">
        <input :value="modelValue" :disabled="disabled" @input="updateValue" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        modelValue: {
            type: [String, Number],
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const updateValue = (event) => {
            emit('update:modelValue', event.target.value)
        }

        return { updateValue }
    }


})
</script>
<style>
.s-textbox {
    text-decoration: none;
    border: 1px solid var(--c-border);
    border-radius: var(--border-radius-base);
    padding: var(--spacer-2xs);
    height: 32px;
    overflow: hidden;
}
.s-textbox:hover {
    background-color: var(--c-secondary);
    border: 1px solid var(--c-primary);
}
.s-textbox.disabled:hover {
    background-color: var(--c-card);
    border: 1px solid var(--c-border);
}
.s-textbox input {
    border: none;
    height: 28px;
    width: calc(100% - 8px);
    outline: none;
    font-size: var(--font-size--base);
    font-weight: bold;
    text-align: center;
    color: var(--c-text);
}
.s-textbox input:disabled,
.s-textbox input:disabled:hover,
.s-textbox.disabled:hover input {
    background-color: var(--_c-light-secondary);
}
.s-textbox:hover input {
    background-color: var(--c-secondary);
}
</style>