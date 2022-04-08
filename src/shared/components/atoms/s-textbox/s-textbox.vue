<template>
    <div class="s-textbox">
        <input :value="modelValue" @input="updateValue" />
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
    border: 1px solid rgb(229, 231, 235);
    border-radius: 8px;
    padding: 4px;
    height: 32px;
    overflow: hidden;
}
.s-textbox:hover {
    background-color: #eef2ff;
    border: 1px solid #0062d6;
}
.s-textbox input {
    border: none;
    height: 28px;
    width: calc(100% - 8px);
    outline: none;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #111827;
}
.s-textbox:hover input {
    background-color: #eef2ff;
}
</style>