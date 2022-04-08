<template>
    <div class="page-cart">
        <div class="card">
            <div class="items">
                <product-cart-item
                    :item="product"
                    class="item"
                    v-for="(product, index) in products"
                    :key="index + 'page-cart-item'"
                ></product-cart-item>
            </div>
            <div class="amount">{{ totalAmountByText }}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { useCartStore } from '../../../shared/stores/cart'

import ProductCartItem from '../components/product-cart-item.vue'
export default defineComponent({
    components: {
        ProductCartItem,
    },
    setup() {
        const cart = useCartStore()

        const products = cart.pickupItems
        const totalAmount = cart.totalAmount

        const totalAmountByText = computed(() => {
            return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(totalAmount))
        })

        return { products, totalAmount, totalAmountByText }
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
.page-cart .card {
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
</style>