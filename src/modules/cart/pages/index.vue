<template>
    <div class="page-cart">
        <div v-if="isEmpty" class="card">
            <div class="items">
                <product-cart-item
                    :item="product"
                    class="item"
                    v-for="(product, index) in items"
                    :key="index + 'page-cart-item'"
                ></product-cart-item>
            </div>
            <div class="amount">{{ totalAmountByText }}</div>
        </div>
        <div v-else class="empty">
            <p class="notice">You have no items in cart</p>
            <s-button :outline="true" @click="backToCategories">Get one</s-button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '../../../shared/stores/cart'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import ProductCartItem from '../components/product-cart-item.vue'
import SButton from '../../../shared/components/atoms/s-button/s-button.vue'
import { usePrice } from '../../../shared/composables/usePrice'
export default defineComponent({
    components: {
        ProductCartItem,
        SButton
    },
    setup() {
        const cart = useCartStore()
        const router = useRouter()
        const { formatPrice } = usePrice()

        const { totalAmount, items } = storeToRefs(cart)

        const isEmpty = computed(() => {
            return items.value.length > 0
        })

        const totalAmountByText = computed(() => {
            return formatPrice(totalAmount.value)
        })

        const backToCategories = () => {
            router.push('/category')
        }

        return { items, totalAmount, isEmpty, totalAmountByText, backToCategories }
    }
})
</script>
<style>
.page-cart {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: var(--spacer-base);
    background-color: var(--c-body);
}
.page-cart .card,
.page-cart .empty {
    width: 550px;
    border-radius: var(--border-radius-base);
    background-color: var(--c-card);
    box-shadow: var(--box-shadow);
}
.page-cart .items {
    display: flex;
    flex-direction: column;
}
.page-cart .items .item {
    border-bottom: 1px solid var(--c-border);
}
.page-cart .card .amount {
    text-align: right;
    padding: var(--spacer-base);
    font-size: var(--h4-font-size);
    font-weight: bold;
}
.page-cart .empty {
    padding: var(--spacer-base);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.page-cart .empty .notice {
    font-size: var(--font-size--base);
    font-weight: bold;
}
</style>