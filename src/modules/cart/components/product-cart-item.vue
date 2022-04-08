<template>
    <div class="product-cart-item">
        <h6 class="name">{{ productName }}</h6>
        <div class="amount">
            <s-quantity-control :quantity="quantity" @increase="onIncreaseQuantity" @decrease="onDecreaseQuantity"></s-quantity-control>
        </div>
        <strong class="price">{{ totalPriceByText }}</strong>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { useCartStore } from '../../../shared/stores/cart'
import { CartItem } from '../../../shared/types/category'

import SButton from '../../../shared/components/atoms/s-button/s-button.vue'
import SQuantityControl from '../../../shared/components/molecules/s-quantity-control/s-quantity-control.vue'
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<CartItem>
        }
    },
    components: {
        SButton,
        SQuantityControl
    },
    setup(props) {
        const cart = useCartStore()

        const productName = computed(() => {
            return props.item?.product.title
        })

        const quantity = computed(() => {
            return props.item?.quantity  as number
        })

        const totalPrice = computed(() => {
            const quantity = props.item?.quantity as number
            const price = props.item?.product.price as number
            return quantity * price
        })

        const totalPriceByText = computed(() => {
            return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalPrice.value))
        })

        const onIncreaseQuantity = () => {
            cart.increaseQuantity(props.item as CartItem)
        }
        const onDecreaseQuantity = () => {
            if (quantity.value === 0) {
                return
            }
            cart.decreaseQuantity(props.item as CartItem)
        }

        return {
            quantity,
            productName,
            totalPrice,
            totalPriceByText,
            onIncreaseQuantity,
            onDecreaseQuantity,
        }
    }
})
</script>
<style>
.product-cart-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    padding: 24px;
}
.product-cart-item .name {
    font-size: 18px;
    margin: 0;
    width: 40%;
}
.product-cart-item .price {
    font-size: 18px;
    margin: 0;
    width: 30%;
    text-align: right;
}
.product-cart-item .amount {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    flex-grow: 1;
}
.product-cart-item .amount .quantity {
    width: 50px;
}
</style>