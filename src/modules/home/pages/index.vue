<template>
    <div class="page-home">
        <div class="categories">
            <s-category-card
                class="item"
                v-for="(product, index) in products"
                :key="index + '_category-product'"
                :item="product"
            ></s-category-card>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { ProductItem } from '../../../shared/types/category'
import { useProduct } from '../../../shared/composables/useProduct'

import SCategoryCard from '../../../shared/components/molecules/s-category-card/s-category-card.vue'

export default defineComponent({
    components: {
        SCategoryCard,
    },
    setup() {
        const { getProducts } = useProduct()
        const products = reactive<ProductItem[]>(getProducts())

        return { products }
    }
})
</script>
<style>
.page-home {
    padding: 24px;
    background-color: rgb(249, 250, 251);
}
.page-home .categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    white-space: nowrap;
    margin-top: 24px;
}
.page-home .categories .item {
    flex-shrink: 1;
    max-width: 550px;
}
</style>