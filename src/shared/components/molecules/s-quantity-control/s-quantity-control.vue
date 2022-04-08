<template>
    <div class="s-quantity-control">
        <s-button :round="true" :outline="true" @click="onIncreaseQuantity">+</s-button>
        <s-textbox class="quantity" disabled="true" v-model="quantity"></s-textbox>
        <s-button :round="true" :outline="true" @click="onDecreaseQuantity">-</s-button>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import SButton from '../../atoms/s-button/s-button.vue'
import STextbox from '../../atoms/s-textbox/s-textbox.vue'
import { computed } from '@vue/reactivity'

export default defineComponent({
    props: {
        quantity: {
            type: Number
        }
    },
    components: {
        SButton,
        STextbox,
    },
    setup(props, { emit }) {

        const numberOfQuantity = ref(props.quantity)
        const onIncreaseQuantity = () => {
            emit('increase', numberOfQuantity.value)
        }
        const onDecreaseQuantity = () => {
            if (numberOfQuantity.value === 0) {
                return
            }
            emit('decrease', numberOfQuantity.value)
        }

        return {
            numberOfQuantity,
            onIncreaseQuantity,
            onDecreaseQuantity,
        }
    }
})
</script>
<style>
.s-quantity-control {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: var(--spacer-xs);
    flex-grow: 1;
}
.s-quantity-control .quantity {
    width: 50px;
}
</style>