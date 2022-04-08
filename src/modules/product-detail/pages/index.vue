<template>
    <div class="page-product-detail">
        <div class="image">
            <s-image :src="productImage"></s-image>
        </div>
        <div class="info">
            <div class="title">
                <h1 class="name">{{ productTitle }}</h1>
                <strong class="price">{{ productPriceText }}</strong>
            </div>
            <div class="action">
                <add-to-card :product="product"></add-to-card>
            </div>
            <div class="description">
                <p class="sub-title">Description</p>
                <div v-html="productDescription"></div>
            </div>
            <div class="description">
                <p class="sub-title">Fabric & Care</p>
                <ul>
                    <li>Only the best materials</li>
                    <li>Ethically and locally made</li>
                    <li>Pre-washed and pre-shrunk</li>
                    <li>Machine wash cold with similar colors</li>
                </ul>
            </div>
            <div class="description">
                <p class="sub-title">Shipping</p>
                <ul>
                    <li>2 ~ 7 days shipping</li>
                    <li>FAST Express service</li>
                    <li>No addition fees</li>
                    <li>Free to return</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { useProduct } from '../../../shared/composables/useProduct'
import { ProductItem } from '../../../shared/types/category'

import SImage from '../../../shared/components/atoms/s-image/s-image.vue'
import AddToCard from '../components/add-to-card.vue'
import { usePrice } from '../../../shared/composables/usePrice'

export default defineComponent({
    components: {
        SImage,
        AddToCard
    },
    setup() {
        const route = useRoute()
        const { getProductById } = useProduct()
        const { formatPrice } = usePrice()

        const quantity = ref(0)

        const productCode = computed(() => {
            return route.params.code as String
        })
        const product = reactive<ProductItem>(getProductById(productCode.value))

        const productTitle = computed(() => {
            return product.title
        })
        const productDescription = computed(() => {
            return product.description
        })
        const productPriceText = computed(() => {
            return formatPrice(product.price as number)
        })
        const productImage = computed(() => {
            return product.images[0]
        })

        return { product, productTitle, productDescription, productPriceText, productImage }
    }
})
</script>
<style>
.page-product-detail {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}
.page-product-detail .image {
    min-width: 50vw;
    min-height: 80vh;
    padding: var(--spacer-base);
    border-radius: var(--border-radius-base);
}
.page-product-detail .image .s-image {
    border-radius: var(--border-radius-base);
}
.page-product-detail .info {
    padding: var(--spacer-base);
}
.page-product-detail .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacer-base);
}
.page-product-detail .title .name {
    font-size: var(--h4-font-size);
    margin: var(--spacer-none);
    padding-right: var(--spacer-base);
}
.page-product-detail .title .price {
    font-size: var(--h4-font-size);
}
.page-product-detail .info .description {
    color: var(--c-subtext);
}
.page-product-detail .info .description .sub-title {
    font-weight: 600;
    color: var(--c-text);
}
</style>