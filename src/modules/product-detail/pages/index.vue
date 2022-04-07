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
                <div class="amount">
                    <s-button :round="true" :outline="true">+</s-button>
                    <s-textbox class="quantity" v-model="quantity"></s-textbox>
                    <s-button :round="true" :outline="true">-</s-button>
                </div>
                <div class="cart">
                    <s-button>Add to cart</s-button>
                </div>
            </div>
            <div class="description">
                <p class="sub-title">Description</p>
                <p>
                    The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for
                    true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique
                    that gives each tee it's own look.
                </p>
                <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
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
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import SImage from '../../../shared/components/atoms/s-image/s-image.vue'
import SButton from '../../../shared/components/atoms/s-button/s-button.vue'
import STextbox from '../../../shared/components/atoms/s-textbox/s-textbox.vue'

import { useProduct } from '../../../shared/composables/useProduct'
import { ProductItem } from '../../../shared/types/category'

export default defineComponent({
    components: {
        SImage,
        SButton,
        STextbox
    },
    setup() {
        const { getProductById } = useProduct()
        const route = useRoute()

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
            return `${product.price}$`
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
    min-height: 70vh;
    padding: 24px;
    border-radius: 8px;
}
.page-product-detail .image .s-image{
    border-radius: 8px;
}
.page-product-detail .info {
    padding: 24px;
}
.page-product-detail .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.page-product-detail .title .name {
    font-size: 24px;
    margin: 0;
}
.page-product-detail .title .price {
    font-size: 24px;
}
.page-product-detail .info .action {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 24px;
}
.page-product-detail .info .action .amount {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
}
.page-product-detail .info .action .amount .quantity {
    width: 50px;
}
.page-product-detail .info .action .cart .s-button {
    width: 100%;
}
.page-product-detail .info .description {
    color: #6b7280;
}
.page-product-detail .info .description .sub-title {
    font-weight: 600;
    color: #111872;
}
</style>