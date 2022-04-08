<template>
    <div class="product-cart-item">
        <h6 class="name">{{ productName }}</h6>
        <div class="amount">
            <s-quantity-control
                :quantity="quantity"
                @increase="onIncreaseQuantity"
                @decrease="onDecreaseQuantity"
            ></s-quantity-control>
        </div>
        <strong class="price">{{ totalPriceByText }}</strong>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { useCartStore } from '../../../shared/stores/cart'
import { CartItem } from '../../../shared/types/category'
import { usePrice } from '../../../shared/composables/usePrice'

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
        const { formatPrice } = usePrice()

        const productName = computed(() => {
            return props.item?.product.title
        })

        const quantity = computed(() => {
            return props.item?.quantity as number
        })

        const totalPrice = computed(() => {
            const quantity = props.item?.quantity as number
            const price = props.item?.product.price as number
            return quantity * price
        })

        const totalPriceByText = computed(() => {
            return formatPrice(totalPrice.value)
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
    gap: var(--spacer-xs);
    padding: var(--spacer-base);
}
.product-cart-item .name {
    font-size: var(--h5-font-size);
    margin: var(--spacer-none);
    width: 40%;
}
.product-cart-item .price {
    font-size: var(--h5-font-size);
    margin: var(--spacer-none);
    width: 30%;
    text-align: right;
}
.product-cart-item .amount {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: var(--spacer-xs);
    flex-grow: 1;
}
.product-cart-item .amount .quantity {
    width: 50px;
}
</style>