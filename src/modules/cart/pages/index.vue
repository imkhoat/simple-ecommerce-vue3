<template>
    <div class="page-cart">
        <div v-if="totalAmount > 0" class="card">
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
export default defineComponent({
    components: {
        ProductCartItem,
        SButton
    },
    setup() {
        const cart = useCartStore()
        const router = useRouter()

        const { totalAmount, items } = storeToRefs(cart)

        const totalAmountByText = computed(() => {
            return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalAmount.value))
        })

        const backToCategories = () => {
            router.push('/category')
        }

        return { items, totalAmount, totalAmountByText, backToCategories }
    }
})
</script>
<style>
.page-cart {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color: rgb(249, 250, 251);
}
.page-cart .card,
.page-cart .empty {
    width: 550px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
.page-cart .items {
    display: flex;
    flex-direction: column;
}
.page-cart .items .item {
    border-bottom: 1px solid rgb(229, 231, 235);
}
.page-cart .card .amount {
    text-align: right;
    padding: 24px;
    font-size: 24px;
    font-weight: bold;
}
.page-cart .empty {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.page-cart .empty .notice {
    font-size: 16px;
    font-weight: bold;
}
</style>