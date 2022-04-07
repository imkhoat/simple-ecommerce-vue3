<template>
    <div class="page-category">
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
import SCategoryCard from '../../../shared/components/molecules/s-category-card/s-category-card.vue'
export default defineComponent({
    components: {
        SCategoryCard,
    },
    setup() {
        const products = reactive<ProductItem[]>([{
            images: ['https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'],
            title: 'MEN Striped Short Sleeve T-Shirt',
            price: 489,
            amount: 10,
            code: 'COL01',
            description: 'A relaxed T-shirt with bold stripes for a signature JWA style.'
        }, {
            images: ['https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'],
            title: 'MEN Striped Short Sleeve T-Shirt',
            price: 489,
            amount: 10,
            code: 'COL01',
            description: 'A relaxed T-shirt with bold stripes for a signature JWA style.'
        }, {
            images: ['https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'],
            title: 'MEN Striped Short Sleeve T-Shirt',
            price: 489,
            amount: 10,
            code: 'COL01',
            description: 'A relaxed T-shirt with bold stripes for a signature JWA style.'
        }, {
            images: ['https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'],
            title: 'MEN Striped Short Sleeve T-Shirt',
            price: 489,
            amount: 10,
            code: 'COL01',
            description: 'A relaxed T-shirt with bold stripes for a signature JWA style.'
        }, {
            images: ['https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'],
            title: 'MEN Striped Short Sleeve T-Shirt',
            price: 489,
            amount: 10,
            code: 'COL01',
            description: 'A relaxed T-shirt with bold stripes for a signature JWA style.'
        }, {
            images: ['https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'],
            title: 'MEN Striped Short Sleeve T-Shirt',
            price: 489,
            amount: 10,
            code: 'COL01',
            description: 'A relaxed T-shirt with bold stripes for a signature JWA style.'
        }, {
            images: ['https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'],
            title: 'MEN Striped Short Sleeve T-Shirt',
            price: 489,
            amount: 10,
            code: 'COL01',
            description: 'A relaxed T-shirt with bold stripes for a signature JWA style.'
        }])

        return { products }
    }
})
</script>
<style>
.page-category {
    padding: 24px;
}
</style>