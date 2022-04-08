<template>
    <div class="add-to-card">
        <div class="amount">
            <s-quantity-control :quantity="quantity" @increase="onIncreaseQuantity" @decrease="onDecreaseQuantity"></s-quantity-control>
        </div>
        <div class="cart">
            <s-button @click="onAddToCart">Add to cart</s-button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { useCartStore } from '../../../shared/stores/cart'
import { ProductItem } from '../../../shared/types/category'

import SButton from '../../../shared/components/atoms/s-button/s-button.vue'
import SQuantityControl from '../../../shared/components/molecules/s-quantity-control/s-quantity-control.vue'

export default defineComponent({
    props: {
        product: {
            type: Object as PropType<ProductItem>
        }
    },
    components: {
        SButton,
        SQuantityControl,
    },
    setup(props) {
        const cart = useCartStore()
        const quantity = ref<number>(1)

        const onIncreaseQuantity = () => {
            quantity.value++
        }
        const onDecreaseQuantity = () => {
            if (quantity.value === 0) {
                return
            }
            quantity.value--
        }
        const onAddToCart = () => {
            cart.addToCart({
                product: props.product as ProductItem,
                quantity: quantity.value
            })
        }

        return {
            quantity,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onAddToCart
        }
    }
})
</script>
<style>
.add-to-card {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 24px;
}
.add-to-card .amount {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
}
.add-to-card .amount .quantity {
    width: 50px;
}
.add-to-card .cart .s-button {
    width: 100%;
}
</style>