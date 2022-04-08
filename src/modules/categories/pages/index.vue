<template>
    <div class="page-category">
        <div class="categories">
            <s-product-card
                class="item"
                v-for="(product, index) in products"
                :key="index + '_category-product'"
                :item="product"
            ></s-product-card>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { ProductItem } from '../../../shared/types/category'
import { useProduct } from '../../../shared/composables/useProduct'

import SProductCard from '../../../shared/components/molecules/s-product-card/s-product-card.vue'

export default defineComponent({
    components: {
        SProductCard,
    },
    setup() {
        const { getProducts } = useProduct()
        const products = reactive<ProductItem[]>(getProducts())

        return { products }
    }
})
</script>
<style>
.page-category {
    padding: var(--spacer-base);
    background-color: var(--c-body);
}
.page-category .categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacer-base);
    white-space: nowrap;
    margin-top: var(--spacer-base);
}
.page-category .categories .item {
    flex-shrink: 1;
    max-width: 550px;
}
</style>